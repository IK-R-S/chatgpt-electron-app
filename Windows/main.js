const { app, shell, Menu, BrowserWindow } = require('electron')
const path = require('path')
const contextMenu = require('electron-context-menu')


function createWindow() {

    const win = new BrowserWindow({
        title: 'ChatGPT',
        icon: 'icons/icon.ico',
        width: 800,
        height: 600,
    })

    const template = [
        {
            label: 'Recarregar',
            accelerator: 'F5',
            click: function (){win.reload()}

        },
        {
            label: 'Encerrar',
            click: function () {app.quit()}
        },

    ]

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    win.loadURL('https://chat.openai.com/chat')

  contextMenu({
    window: win,
    showCopyImageAddress: false,
    showSaveImageAs: false,
    showInspectElement: false,
    prepend: (defaultActions, params, browserWindow) => [
      {
        label: 'Copiar',
        click: () => {
          // Executa a função de copiar
          browserWindow.webContents.copy();
        },
      },
    ],
  });
    
}

app.whenReady().then( () => {
    
    createWindow();

})
