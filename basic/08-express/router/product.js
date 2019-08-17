const express = require('express')
const router = express.Router()

router.post('/product', (req, res, next) => {
  let { username, password } = req.body
  console.log(username, password)
  
  res.json({
    message: 'ok.'
  })
})

module.exports = router