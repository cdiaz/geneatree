const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;

// Keep a global reference of the window object to prevent the window
// from being closed when JS goes to garbage collection.
let win;

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 800,
        height: 600
    });

    // and load the index.html of the app.
    win.loadURL(`file://${__dirname}/index.html`);

    win.on('closed', () => {
        win = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // Do not process on OSX, common practice is to keep
    // the app alive even when no window is opened.
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OSX, clicking the icon when no windows is in the scope is
    // similar to recreate it.
    if (win === null) {
        createWindow();
    }
});
