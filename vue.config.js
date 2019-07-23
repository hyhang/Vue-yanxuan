module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/api': { // 请求所有以'/api'开头的请求路径
        target: 'https://m.you.163.com/topic/v1/find/',
        changeOrigin: true, //支持跨域
        pathRewrite: { //将路径中/api改写为‘’
          '^/api' : ''
        }
      }
    }
  }
}