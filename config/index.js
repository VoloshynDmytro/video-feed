const path = require('path');

const root = process.cwd();
const publicRoot = path.join(root, 'dist');
const envConfig = require('./env/' + process.env.NODE_ENV || 'development');

module.exports = Object.assign(envConfig, {
  root: root,
  clientAppRoot: root,
  publicRoot: publicRoot,
  webpack: {
    entries: {
      app: path.join(root, 'src/app.js')
    },
    resolveAssets: path.resolve(root, 'src/assets')
  },
  templates: {
    index: path.join(root, 'src', 'index.pug')
  }
});
