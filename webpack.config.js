var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.js',

  output: {
    path: __dirname + '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.(jpg|png|gif)$/,
        include: /img/,
        loader: 'file-loader',
      },
      {
        test: /\.css$/,
        loader:'css-loader'
      }
    ]
  },
  
  plugins: [
    new CopyWebpackPlugin([
      { from: './index.html' }
    ]),
    /* new CopyWebpackPlugin([
      { from: './src/vendors/phaser.min.js' }
    ]), */
    new CopyWebpackPlugin([
      { from: './src/assets', to: 'assets' }
    ])
  ],

  resolve: {
    extensions: ['*', '.js', '.jsx', '.css']
  },

  devServer: {
    inline: true,
    contentBase: './dist',
    port: 5000
  }
};