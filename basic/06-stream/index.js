const fs = require('fs')

const zlib = require('zlib')

const gzip = zlib.createGzip()

const inp = fs.createReadStream('./log.json')
const oup = fs.createWriteStream('./log.json.gzip')

inp.pipe(gzip).pipe(oup)