const crypto = require('crypto');

const secret = 'a';
const hash = crypto.createHmac('sha256', secret)
                   .update('I love you')
                   .digest('hex');
console.log(hash);