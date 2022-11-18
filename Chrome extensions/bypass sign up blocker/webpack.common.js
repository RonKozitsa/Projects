const path = require('path');
const copyPlugin = require('copy-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports  = {
  entry: {
    popup: path.resolve('src/popup/popup.tsx'),
    contentScript: path.resolve('src/content-scripts/contentScript.ts'),
    contentScriptStyle: path.resolve('src/content-scripts/contentScriptStyle.css'),
    background: path.resolve('src/background/background.ts'),
  },
  module: {
    rules: [
      {
        use: 'ts-loader',
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
      {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /.scss$/i,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        type: "asset/resource",
        test: /\.(jpg|png|svg|jpeg)/
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css']
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new copyPlugin({
      patterns: [
        {
          from: path.resolve('src/static'),
          to: path.resolve('dist')
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].css"
    }),
    ...getHtmlPlugins(['popup','options', 'background', 'contentScript'])
  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
}

function getHtmlPlugins(chunks) {
  return chunks.map(chunk => {
    return new htmlPlugin({
      title: 'React extension',
      filename: `${chunk}.html`,
      chunks: [chunk]
    })
  })
}
