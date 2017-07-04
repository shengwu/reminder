const {app, Notification} = require('electron')
const path = require('path')
const url = require('url')
const menubar = require('menubar')

var mb = menubar()

mb.on('ready', function ready () {

  const notification = new Notification({
    title: 'hello world',
    body: 'Some other text'
  })
  notification.show()


  console.log('app is ready')
  // your app code here
})
