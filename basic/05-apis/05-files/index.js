// const fs = require('fs').promises
const fs = require('fs')

// CRUD 增删改查
// 错误优先的回调函数

// fs.mkdir('logs', (err) => {
//   if (err) {
//     console.log(err.message)
//   } else {
//     console.log('文件夹创建成功.')
//   }
// })

// fs.writeFile('./logs/log01.log', 'error', (err) => {
//   if (err) {
//     console.log(err.message)
//   } else {
//     console.log('文件创建成功.')
//   }
// })

// try {
//   fs.mkdirSync('logs2')
//   console.log('文件夹创建成功.')
// } catch (e) {
//   console.log(e.message)
// }

// ;(async () => {
//   await fs.mkdir('logs3')
//   console.log('文件夹创建成功')
// })()

// fs.appendFile('./logs/log01.log', '\nmessage', () => {
//   console.log('ok.')
// })

// fs.rmdir('./logs3', () => {
//   console.log('ok.')
// })

// fs.unlink('./logs/log01.log', () => {
//   console.log('ok.')
// })

// for (var i = 0; i < 10; i++) {
//   fs.writeFile('./logs/log-' + i + '.log', 'log' + i, () => {
//     console.log('ok.')
//   })
// }

// for (var i = 0; i < 5; i++) {
//   fs.mkdir('./log' + i, () => {
//     console.log('ok.')
//   })
// }

// fs.readdir('./', (err, files) => {
//   files.map((value, index) => {
//     fs.stat('./' + value, (err, stat) => {
//       console.log(stat.isFile())
//     })
//   })
// })

// fs.rename('./logs/log-0.log', './logs/log-00.log', (err) => {
//   console.log('ok.')
// })

// fs.rename('./log0', './logs/log0', () => {
//   console.log('ok.')
// })

fs.watchFile('./logs/log0/test.txt', (curr, prev) => {
  console.log(curr)
})