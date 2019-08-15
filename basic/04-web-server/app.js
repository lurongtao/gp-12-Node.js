const http = require('http')

const app = http.createServer((req, res) => {
  res.writeHead(200, {
    'content-type': 'text/html'
  })
  switch(req.url) {
    case '/index.html' :
      res.write('<h1>home</h1>')
      break
    case '/search.html' :
      res.write('<h1>search</h1>')
      break
    default :
      res.write('<h1>404</h1>')
  }
  res.end()
})

app.listen(8080, 'localhost', () => {
  console.log('localhost:8080')
})