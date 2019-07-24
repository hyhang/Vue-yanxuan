module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/topic': { // 请求所有以'/topic'开头的请求路径
        target: 'https://m.you.163.com/topic/v1/find/',
        changeOrigin: true, //支持跨域
        pathRewrite: { //将路径中/topic改写为‘’
          '^/topic' : ''
        }
      },
      '/search': { // 请求所有以'/search'开头的请求路径
        target: 'https://m.you.163.com/xhr/search/',
        changeOrigin: true, //支持跨域
        pathRewrite: { //将路径中/search改写为‘’
          '^/search' : ''
        }
      }
    }
  }
}