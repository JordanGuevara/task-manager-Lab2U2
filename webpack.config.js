const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],  // procesa e inyecta CSS
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // genera el index.html con el JS inyectado
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),  // sirve la carpeta dist
    },
    port: 8080,
    open: true,
    hot: true,
  },
};
