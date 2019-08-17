const express = require('express')
const router = express.Router()

router.get('/api/signin', (req, res, next) => {
  // 获取前端信息
  let { username, password } = req.query
  console.log(username, password)

  // res.json({
  //   message: '登录成功[get].'
  // })
  res.set('content-type', 'application/json;charset=utf-8')
  res.render('succ', { message: '登录成功[get].' })
})

router.post('/api/signin', (req, res, next) => {
  let { username, password } = req.body
  console.log(username, password)

  res.json({
    message: '登录成功[post].'
  })
})

module.exports = router