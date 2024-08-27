const { contextBridge, ipcRenderer, ipcMain } = require('electron')

contextBridge.exposeInMainWorld('util', {
    dashData: () => ipcRenderer.invoke('dash'),
    dashboard: (update) => ipcRenderer.send('dash-update', update),
    getNote: (title) => ipcRenderer.invoke('getNote', title),
    updateNote: (update) => ipcRenderer.send('updateNote', update)
    // we can also expose variables, not just functions
})
