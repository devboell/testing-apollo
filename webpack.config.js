const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    main: [
      'react-hot-loader/patch',
      './main.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 4,
            },
            pngquant: {
              quality: '75-90',
              speed: 3,
            },
          },
        }],
        exclude: /node_modules/,
        include: __dirname,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new CopyWebpackPlugin([
      { from: 'images', to: 'images' },
    ]),
  ],

  resolve: {
    modules: ['src', 'src/images', 'node_modules'],
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
}
