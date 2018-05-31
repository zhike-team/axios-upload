'use strict';

const axios = require('axios');
const FormData = require('form-data');

const isObject = (obj) => {
  return typeof obj === 'object' && obj !== null;
};

const instance = axios.create();

instance.interceptors.request.use((config) => {

  const data = config.data;

  if (isObject(data)) {

    // axios 没有固定这个值导致follow-redirects包使用默认值10M，无法上传较大的文件
    config.maxContentLength = 1024 * 1024 * 100;

    config.transformRequest = [(data, headers) => {
      let form = new FormData();
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          form.append(key, data[key]);
        }
      }
      delete headers.post['Content-Type'];
      delete headers.put['Content-Type'];
      delete headers.patch['Content-Type'];
      Object.assign(headers, form.getHeaders());
      return form;
    }];

  }

  return config;

});

module.exports = instance;