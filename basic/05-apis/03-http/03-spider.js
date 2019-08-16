const https = require('https')
const http = require('http')

const cheerio = require('cheerio')

const options = {
  protocol: 'https:',
  hostname: 'www.qunar.com',
  port: 443,
  path: '/',
  method: 'GET'
}

function filterDOM (html) {
  const $ = cheerio.load(html)
  let hotlist = []
  $('.dujia-body-right-item').map((index, value) => {
    hotlist.push({
      title: $(value).find('.body-right-bottom-words span').text(),
      img: $(value).find('.dujia-body-right-img img').attr('src'),
      price: $(value).find('.dujia-body-right-special-price span:last-child em').text()
    })
  })
  return hotlist
}

http.createServer((request, response) => {

  const app = https.request(options, (res) => {
    let data = ''
  
    res.setEncoding('utf-8')
  
    res.on('data', chunk => {
      data += chunk
    })
  
    res.on('end', () => {
      const result = filterDOM(data)
      response.writeHead(200, {
        'content-type': 'application/json; charset=utf-8'
      })
      response.end(JSON.stringify(result))
    })
    
    res.on('error', err => {
      console.log(err.message)
    })
  }).on('error', (err) => {
    console.log(err.message)
  })
  
  app.end()

}).listen(8000)
