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
      .set('@views', resolve('src/views'))
      .set('@styles', resolve('src/styles'))
      .set('@components', resolve('src/components'))
      .set('@assets', resolve('src/assets'))
      .set('@hooks', resolve('src/hooks'))
      .set('@images', resolve('src/assets/images'));
  },

  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      scss: {
        prependData: `@import "~@styles/common/app.scss";`
      }
      // pass options to sass-loader
    },
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true
  },
  devServer: {
    hot: true,
    port: 8091,
    open: true,
    host : "0.0.0.0",
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
