const { app } = require('electron');
const create = require('./mainWindow');

app.whenReady().then(() => {
  process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'; // 关闭web安全警告
  create();
});
