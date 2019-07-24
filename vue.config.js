module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/topicapi': { // 请求所有以'/topic'开头的请求路径
        target: 'https://m.you.163.com/topic/v1/find/',
        changeOrigin: true, //支持跨域
        pathRewrite: { //将路径中/topicapi改写为‘’
          '^/topicapi' : ''
        }
      },
      '/searchapi': { // 请求所有以'/search'开头的请求路径
        target: 'https://m.you.163.com/xhr/search/',
        changeOrigin: true, //支持跨域
        pathRewrite: { //将路径中/searchapi改写为‘’
          '^/searchapi' : ''
        }
      }
    }
  }
}