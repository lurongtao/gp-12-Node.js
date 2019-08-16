const http = require('http')

http.get({
  protocol: 'http:',
  host: 'm.maoyan.com',
  port: 80,
  method: 'GET',
  path: '/ajax/movieOnInfoList'
}, (res) => {
  let data = ''

  res.setEncoding('utf-8')
  res.on('data', chunk => {
    data += chunk
  })
  res.on('end', () => {
    console.log(JSON.parse(data).movieList)
  })
})