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

// 引入路由中间件
app.use('/', usersRouter)
app.use('/cart', productRouter)

app.listen(3000, () => console.log('localhost:3000'))