const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const usersRouter = require('./router/users')
const productRouter = require('./router/product')

// 静态文件中间件
app.use(express.static('./public'))
app.use(bodyParser.json())

// 第三方中间件：内容解析中间件
app.use(bodyParser.urlencoded({ extended: false }))

// 载入模板引擎
app.set('views', './views')
app.set('view engine', 'ejs')

// 引入路由中间件
app.use('/', usersRouter)
app.use('/cart', productRouter)


// 应用中间件
// 中间件栈
const isLogin = true
app.use('/api', (req, res, next) => {
  console.log(0)
  if (isLogin) {
    req.test = 'balabala'
    next()
  } else {
    res.send('没有权限')
  }
}, (req, res, next) => {
  console.log(1)
  console.log(req.test)
  res.sent('我是内容页面.')
})

// 错误处理中间件
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3333, () => console.log('localhost:3333'))