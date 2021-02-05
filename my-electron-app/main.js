const { app, BrowserWindow, ipcMain } = require('electron');
const addon = require('myextension');

const obj = new addon.MyObject(10);
ipcMain.on('buttonClicked', (event) => {
    // TODO: add addon call
    event.reply('result', obj.plusOne());
});

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});