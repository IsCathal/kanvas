const fs = require('fs');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '', // Add this line
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    server: {
      type: 'https',
      options: {
        key: fs.readFileSync(path.resolve(__dirname, '192.168.1.37+3-key.pem')),
        cert: fs.readFileSync(path.resolve(__dirname, '192.168.1.37+3.pem')),
      },
    },
    open: true,
    host: '0.0.0.0',        // Accept connections from any IP
    allowedHosts: 'all',    // Allow all host headers\
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
