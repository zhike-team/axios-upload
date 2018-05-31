## axios-upload
node 中在 axios 基础上上传表单数据

![npm](https://img.shields.io/npm/v/@zhike/axios-upload.svg)
![npm](https://img.shields.io/npm/dm/@zhike/axios-upload.svg)

[![GitHub forks](https://img.shields.io/github/forks/zhike-team/axios-upload.svg?style=social&label=Fork)](https://github.com/zhike-team/axios-upload/fork)
[![GitHub stars](https://img.shields.io/github/stars/zhike-team/axios-upload.svg?style=social&label=Star)](https://github.com/zhike-team/axios-upload)

### Installation
```
npm i @zhike/axios-upload 
```

### example
```
const axiosUpload = require('axios-upload');

// 这里直接将 stream 传入即可
// 文件默认上传最大为100M，若需修改，使用maxContentLength参数，单位byte
const data = {
  name: 'test',
  filedata: fs.createReadStream('./test.png')
};

await axiosUpload({
  url: 'http://xxx.xxx/test',
  method: 'post',
  headers: {
    'cache-control': 'no-cache'
  },
  data: data
});
```