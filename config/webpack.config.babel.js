import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const sassLoaders = {
  fallback: 'style-loader',
  use: [{
    loader: 'css-loader',
    query: {
      modules: true,
      localIdentName: '[local]'
    }
  }, {
    loader: 'sass-loader'
  }]
};

export default {
  entry: ['./example/index.js', './src/index.js'],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(sassLoaders)
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('example/index.html'),
    }),
    new ExtractTextPlugin({
      filename: 'index.css',
      allChunks: true
    })
  ],
  devServer: {
    contentBase: path.resolve('dist')
  }
};
