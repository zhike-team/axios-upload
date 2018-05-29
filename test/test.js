const axiosUpload = require('../index');
const assert = require('assert');
const fs = require('fs');
const Koa = require('koa');
const fileHandler = require('@zhike/koa2-upload');

const app = new Koa();
app.use(fileHandler({autoDelete: true}));
app.use(async (ctx) => {
  ctx.body = 'success';
});

app.listen(3000);

describe('测试上传功能', async function () {
  const filePath = 'package.json';

  it('upload test.js', async function () {
    const data = {
      myName: 'Steve',
      myFile: fs.createReadStream(filePath)
    };

    let res = await axiosUpload({
      url: 'http://127.0.0.1:3000',
      method: 'post',
      data: data
    });

    assert(res.status === 200);
  });

});
