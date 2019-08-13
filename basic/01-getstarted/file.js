const fs = require('fs')

fs.writeFile('./greeting.log', 'hello', (err) => {
  if (err) {
    // throw new Error('文件写入失败')
    console.log(err.message)
  } else {
    console.log('文件写入成功')
  }
})