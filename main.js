const electron = require('electron')
require('electron-reload')(__dirname)
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

let mainWindow

function createWindow () {
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize
  let windowWidth = 380
  let windowHeight = height
  let marginX = 0
  let marginY = marginX + 0

  mainWindow = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    frame: false,
    x: width - (windowWidth + marginX),
    y: marginY,
    transparent: true
  })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'public/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.setAlwaysOnTop(true)
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
