const http = require('http')

const url = 'http://m.maoyan.com/ajax/movieOnInfoList'

http.get(url, (res) => {
  let { statusCode } = res

  console.log(statusCode)
  console.log(headers['content-type'])

  res.on('data', chunk => {
    data += chunk
  })

  res.on('end', () => {
    let movieList = JSON.parse(data).movieList.map((value, index) => {
      return value.nm
    })

    // console.log(movieList)
  })

  res.on('error', (err) => {
    console.log(err.msg)
  })
}).on('error', (err) => {
  console.log(err.msg)
})