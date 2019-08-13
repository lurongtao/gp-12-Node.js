const http = require('http')
const request = require('request')

const app = http.createServer((req, res) => {
  request('https://www.baidu.com', function(err, response, body){
    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8'
    })
    res.write(body)
    res.end()
  })
})

app.listen(8000, 'localhost', () => {
  console.log('localhost:8000')
})