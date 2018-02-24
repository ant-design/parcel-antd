const proxy = require('http-proxy-middleware');
const Bundler = require('parcel-bundler');
const express = require('express');

const bundler = new Bundler('src/index.html', {
  cache: false,
});

const app = express();

// 反向代理配置
app.use(
  '/api',
  proxy({
    target: 'http://localhost:3000',
  }),
);

// 使用中间件进行代码转化
app.use(bundler.middleware());

//监听端口默认是1234
app.listen(Number(process.env.PORT || 1234));
