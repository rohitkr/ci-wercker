const path = require('path');
module.exports = {
  entry: {
    person: './src/index.js',
  },
  output: {
    path: path.resolve('./dist/'),
    filename: '[name].js',
    library: 'Person',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true
  }
};
