const http = require('http')

const app = http.createServer((req, res) => {
  switch(req.url) {
    case '/api/movielist': 
      
      http.get('http://m.maoyan.com/ajax/movieOnInfoList', (response) => {
        let data = ''
        response.setEncoding('utf-8')
        response.on('data', chunk => {
          data += chunk
        })
        response.on('end', () => {
          res.writeHead(200, { 'content-type': 'application/json;charset=utf-8' })
          res.write(data)
          res.end()
        })
      })

      break
    default : 
      res.end('404.')
      break
  }
})

app.listen(8000, () => {
  console.log('localhost: 8000')
})