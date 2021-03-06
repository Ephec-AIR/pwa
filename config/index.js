const path = require('path');
const production = process.env.NODE_ENV === 'production';

module.exports = {
  port: {
    front: 8080 // port for devServer
  },
  entry: {
    front: [path.resolve(__dirname, '../src/app.js')], // entrypoint for front js file
    back: false // entrypoint for server js file
  },
  devtool: production ? false : 'eval-cheap-module-source-map',
  componentsPath: path.resolve(__dirname, '../src/components'), // path for components (aliases)
  viewsPath: path.resolve(__dirname, '../src/views'), // path for views (aliases)
  staticPath: path.resolve(__dirname, '../src'), // path for static files (aliases)
  template: path.resolve(__dirname, '../src/index.html') // path of template
}
