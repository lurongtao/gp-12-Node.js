const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
    case '/home':
      res.end('home page.')
      break
    case '/index.html':
      var file = fs.readFileSync('./public/index.html')
      res.end(file)
      break
    case '/style.css':
      var file = fs.readFileSync('./public/style.css')
      res.end(file)
    case '/app.js':
      var file = fs.readFileSync('./public/app.js')
      res.end(file)
    case '/wangyibo.jpg':
      var file = fs.readFileSync('./public/wangyibo.jpg')
      res.end(file)
    default:
      res.end('404: page not found.')
  }
})

server.listen(8000, () => {
  console.log('localhost:8000')
})