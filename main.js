const { app, BrowserWindow, ipcMain } = require('electron');

app.on('ready', () => {
  console.log('Aplicação iniciada');
  let mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    alwaysOnTop: true,
    icon: `file://${__dirname}/dist/angular-electron/assets/favicon.ico`,
    webPreferences: {
      nodeIntegration: true,
      backgroundThrottling: false
    }
  });

  //mainWindow.loadURL('https://www.alura.com.br');
  console.log(__dirname)
  //mainWindow.loadFile(`dist/angular-electron/index.html`)
  mainWindow.loadURL(`file://${__dirname}/dist/angular-electron/index.html`);

});

app.on('window-all-closed', () => {
  app.quit();
});

let sobreWindow = null;

ipcMain.on('abrir-janela-sobre', () => {
  if (sobreWindow == null) {
    sobreWindow = new BrowserWindow({
      width: 300,
      height: 220,
      alwaysOnTop: true,
      frame: false,
      webPreferences: {
        nodeIntegration: true,
        backgroundThrottling: false
      }
    });
    sobreWindow.on('closed', () => {
      sobreWindow = null;
    });
  }

  sobreWindow.loadURL(`file://${__dirname}/dist/angular-electron/assets/sobre.html`);

});

ipcMain.on('fechar-janela-sobre', () => {
  sobreWindow.close();
});