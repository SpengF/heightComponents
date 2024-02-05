const path = require("path");
module.exports = {
  mode: "production",
  entry: {
    index: "./src/index",
    button: "./packages/button/index",
    aside: "./packages/aside/index",
  },
  output: {
    path: path.join(__dirname, "./lib"), //打包后的文件存放的地方
    filename: "[name].js", //打包后输出文件的文件名
    clean: true,
  },
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
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
