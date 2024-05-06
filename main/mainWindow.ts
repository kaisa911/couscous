const { BrowserWindow } = require('electron');
const { resolve } = require('path');

let win;

const isDev = process.env.NODE_ENV === 'development';

module.exports = function create() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (isDev) {
    win.webContents.openDevTools(); //打开控制台
    win.loadURL('http://localhost:8080');
  } else {
    // 线上模式, 用react打包的
    win.loadFile(resolve(__dirname, '../render/dist-main/index.html'));
  }
  return win;
};
