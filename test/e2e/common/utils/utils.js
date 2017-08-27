const fs = require('fs-extra');
const path = require('path');

const LOGS_DIR = path.join(__dirname, '..', '..', 'logs');

const makeLogsFilePath = (name, extension) => {
  fs.mkdirsSync(LOGS_DIR);
  const fileName = [name.replace(/[^a-z0-9]/gi, '_'), extension].join('.');

  return path.join(LOGS_DIR, fileName);
};

module.exports = {
  cleanupLogs: () => {
    fs.removeSync(LOGS_DIR);
  },
  takeScreenshot: (testTitle) => {
    browser.takeScreenshot().then((data) => {
      const filePath = makeLogsFilePath(testTitle, 'png');
      const stream = fs.createWriteStream(filePath);

      stream.write(new Buffer(data, 'base64'));
      stream.end();
    });
  },
  writeBrowserLog: (testTitle, browserLog) => {
    const messages = browserLog.map(log => log.message);
    if (messages.length === 0) {
      return;
    }
    const data = messages.join('\n\n');
    const filePath = makeLogsFilePath(testTitle, 'txt');
    fs.writeFileSync(filePath, data);
  }
};