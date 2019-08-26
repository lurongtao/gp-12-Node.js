const jwt = require('jsonwebtoken')
const fs = require('fs')

// let token = jwt.sign({ username: 'admin' }, 'iloveu')
// // console.log(token)

// jwt.verify(token, 'ilove', (err, decoded) => {
//   console.log(decoded)
// })
let private_key = fs.readFileSync('./key/rsa_private_key.pem')
let token = jwt.sign({ username: 'admin' }, private_key, { algorithm: 'RS256'})

let public_key = fs.readFileSync('./key/rsa_public_key.pem')
jwt.verify(token, public_key, (err, decoded) => {
  console.log(decoded)
})
