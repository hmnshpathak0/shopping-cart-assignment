const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./App.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js"
  },
  devServer: {
      inline: true,
      host: 'localhost',
      port: 4201,
      historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ['react','stage-0']
         },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader","sass-loader"]
      }
    ]
  }
};