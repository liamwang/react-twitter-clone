import webpack from 'webpack';
import path from 'path';

module.exports = {
  entry: [
    'webpack-hot-middleware/client?http://localhost:8888',
    './client/index.js'
  ],
  module: {
    loaders: [
      {
      test: /\.jsx?$/,
      include: [
        path.join(__dirname, 'client'),
        path.join(__dirname, 'server/shared')
      ],
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader'
    },
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: "cheap-eval-source-map"
}