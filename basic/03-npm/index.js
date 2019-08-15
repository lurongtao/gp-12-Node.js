const _ = require('lodash')
const arr = ['a', 'b', 'c', 'd']
const newArr = _.chunk(arr, 2)
console.log(newArr)