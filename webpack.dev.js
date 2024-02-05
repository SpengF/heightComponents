const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: path.join(__dirname, "./example/src/index"), //已多次提及的唯一入口文件
  output: {
    path: path.join(__dirname, "./dist"), //打包后的文件存放的地方
    filename: "index.js", //打包后输出文件的文件名
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/example/public/index.html", //new 一个这个插件的实例，并传入相关的参数
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss?$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    static: [
      path.resolve(__dirname, "./example/public"),
      path.resolve(__dirname, "./dist"),
    ],
    historyApiFallback: true,
    port: "8080",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
