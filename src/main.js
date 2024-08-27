const { app, BrowserWindow, ipcMain, protocol, net } = require('electron');
const path = require('node:path');
const fs = require('node:fs/promises');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}



const getDashboardData = async () => {

  let read = await fs.readFile('/Users/michaelfamurewa/Projects/txtedit/data/dashboard.json', { encoding: 'utf8' })
  const data = JSON.parse(read)

  let date = new Date()
  const yyyy = date.getFullYear()
  const mm = date.getMonth() + 1
  const dd = date.getDate()
  date = `${mm}/${dd}/${yyyy}`

  if (date === data.QOTD.date) {
    return data
  }
  else {
    data.QOTD.date = date
    const response = await fetch('https://inspo-quotes-api.herokuapp.com/quotes/random');
    const obj = await response.json()
    data.QOTD.quote = obj.quote.text
    data.QOTD.author = obj.quote.author

    const update = JSON.stringify(data)
    await fs.writeFile('/Users/michaelfamurewa/Projects/txtedit/data/dashboard.json', update);

    return data
  }

}

const updateDash = async (event, update) => {
  const write = JSON.stringify(update)
  await fs.writeFile('/Users/michaelfamurewa/Projects/txtedit/data/dashboard.json', write);
}

const sendNote = async (event, title) => {
  let read = await fs.readFile(`/Users/michaelfamurewa/Projects/txtedit/data/${title}.md`, { encoding: 'utf8' })
  return read
}

const updateNote = async (event, update) => {
  await fs.writeFile(`/Users/michaelfamurewa/Projects/txtedit/data/${update.name}.md`, update.content);
}


const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1300,
    height: 875,
    webPreferences: {
      preload: path.join(__dirname, '../../src/preload.js')
    },
  });
  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

protocol.registerSchemesAsPrivileged([{
  scheme: 'media',
  privileges: {
    secure: true,
    supportFetchAPI: true,
    bypassCSP: true,
    stream: true
  }
}])

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  protocol.handle('media', request => {
    const pathToMedia = new URL(request.url).pathname
    return net.fetch(`file://${pathToMedia}`)
  })
  ipcMain.handle('dash', getDashboardData)
  ipcMain.on('dash-update', updateDash)
  ipcMain.handle('getNote', sendNote)
  ipcMain.on('updateNote', updateNote)
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
