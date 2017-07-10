const electron = require('electron')
const {Notification} = electron
const path = require('path')
const url = require('url')
const menubar = require('menubar')

const ONE_MINUTE_INTERVAL = 60 * 1000
const REMINDER_INTERVAL = 20 * ONE_MINUTE_INTERVAL

const intervalToStr = (interval_ms) => {
  return interval_ms / ONE_MINUTE_INTERVAL + ' minutes'
}

const showNotification = (title, body, silent = false) => {
  const notification = new Notification({
    title: title,
    body: body,
    silent: silent
  })
  notification.show()
}

const showReminder = () => {
  showNotification('Take a break!',
                   'It has been ' + intervalToStr(REMINDER_INTERVAL))
}

const mb = menubar({
  icon: 'icon.png',
  width: 100,
  height: 50,
})

mb.on('ready', () => {
  showNotification('Starting reminders',
                   'Interval: ' + intervalToStr(REMINDER_INTERVAL),
                   true)
  setInterval(showReminder, REMINDER_INTERVAL)
})
