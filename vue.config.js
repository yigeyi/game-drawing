const path = require('path');
const resolve = dir => path.join(__dirname, dir);
const ENV = process.env.NODE_EVN;

module.exports = {
  lintOnSave: false, //关闭eslint语法检查
  outputDir: process.env.outputDir,
  chainWebpack: config => {
    config
      .entry()
      .add('babel-polyfill')
      .end();
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@pages', resolve('src/pages'))
      .set('@styles', resolve('src/styles'))
      .set('@assets', resolve('src/assets'));
  },
  devServer: {
    port: 8091,
    proxy: {
      '/api': {
        //target: 'http://csair-social-media.test',
        target: 'http://192.168.1.150:8100',
        changeOrigin: true
      }
    },
    disableHostCheck: true
  }
};
