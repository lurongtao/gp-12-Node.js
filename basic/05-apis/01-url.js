const url = require('url')

const strUrl = 'https://www.baidu.com:443/api/index.php?id=3&city=北京#/home'

const objUrl = {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com:443',
  port: '443',
  hostname: 'www.baidu.com',
  hash: '#/home',
  search: '?id=3&city=北京',
  query:  { id: '3', city: '北京' },
  pathname: '/api/index.php',
  path: '/api/index.php?id=3&city=北京',
  href: 'https://www.baidu.com:443/api/index.php?id=3&city=北京#/home' 
}

// const result = url.parse(strUrl, true, true)

// const result = url.format(objUrl)

const result = url.resolve('https://www.baidu.com/api/', '../index.html')

console.log(result)