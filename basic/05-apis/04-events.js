const EventEmitter = require('events')

class MyEventEmitter extends EventEmitter {}

const event = new MyEventEmitter()

event.once('play', (arg) => {
  console.log('哪吒', arg)
})

event.emit('play', '闹海')
event.emit('play', '敖丙')