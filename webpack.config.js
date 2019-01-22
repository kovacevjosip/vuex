const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: ['./src/main.js'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {},
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
    },
  },
  devServer: {
    port: 3100,
    historyApiFallback: true,
    noInfo: true,
  },
  devtool: '#eval-source-map',
};
