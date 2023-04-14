// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
const proxy = require('http-proxy-middleware');

module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '智慧云·管理中心'
        return args
      })
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.56.1:9102',
      }
    }
  }
}
