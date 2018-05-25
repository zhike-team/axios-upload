'use strict';

const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const contentType = 'content-type';

const isObject = (obj) => {
  return typeof obj === "object" && obj !== null;
}

const API = axios.create();

API.interceptors.request.use((config) => {

  const formData = config.data;

  if (isObject(formData)) {

    config.transformRequest = [(data, headers) => {
      let form = new FormData();
      for(let key in formData) {
        form.append(key, formData[key]);
      }
      headers[contentType] = form.getHeaders()[contentType];
      return form;
    }];

  }

  return config;

});

module.exports = API;