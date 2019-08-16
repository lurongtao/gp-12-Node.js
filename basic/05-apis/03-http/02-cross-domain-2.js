const http = require('http')

const proxy = require('http-proxy-middleware')

const app = http.createServer((req, res) => {
  
  var apiProxy = proxy('/api', { 
    target: 'http://m.maoyan.com', 
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  })

  if (/^\/api/.test(req.url)) {
    apiProxy(req, res)
  } else {
    switch(req.url) {
      case '/index.html':
        res.end('home')
        break
      default:
        res.end('404.')
    }
  }
  
})

app.listen(8000, () => {
  console.log('localhost: 8000')
})