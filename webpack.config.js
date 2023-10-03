let path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/Js/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  mode: "development",
};
