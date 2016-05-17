const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {
  entry: "./index.js",
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  plugins: [new WebpackNotifierPlugin()]
};
