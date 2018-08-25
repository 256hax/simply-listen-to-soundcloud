// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')

// for App version auto updater (DISABLED)
//const { autoUpdater } = require('electron')

// electron-about-window module.
// reference: https://github.com/rhysd/electron-about-window
// example: https://github.com/rhysd/electron-about-window/blob/master/example/main.js
const { electron, Menu } = require ('electron')
const join = require('path').join;
const openAboutWindow = require('about-window').default;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1000, height: 500})

  // and load the index.html of the app.
  mainWindow.loadFile('src/index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  //--- about window ---
  const menu = Menu.buildFromTemplate([
      {
          label: 'About',
          submenu: [
              {
                  label: 'About This App',
                  click: () =>
                      openAboutWindow({
                          icon_path: join(__dirname, '../assets/images/icons/icon.png'),
                          copyright: 'Copyright 256hax',
                          package_json_dir: __dirname
                          //,open_devtools: process.env.NODE_ENV !== 'production', // for debug
                      }),
              },
          ],
      },
  ]);
  Menu.setApplicationMenu(menu);
  //--- /about window ---

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


/*------------------------------------------------
  Auto Updater (DISABLED)
  ------------------------------------------------*/
/*
const server = 'https://github.com/'
const feed = `${server}/256hax/simply-listen-to-soundcloud/${process.platform}/${app.getVersion()}`

autoUpdater.setFeedURL(feed)
*/
