const querystring = require('querystring')

// const str = 'name:junhao;age:18;gender:man'
// const obj = { name: 'junhao', age: '18', gender: 'man' }
const query = 'url=http://www.alibaba.com&city=北京'

// const result = querystring.parse(str, ';', ':')
// const result = querystring.stringify(obj, ';', ':')
const result = querystring.escape(query)
console.log(querystring.unescape(result))