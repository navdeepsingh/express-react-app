const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = ({ mode } = { mode: "production" }) => ({
  mode,
  entry: "./frontend/src/index.js",
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:5001/",
        pathRewrite: { "^/api": "" },
      },
    },
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jpe?g$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 5000,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        resolve: {
          extensions: [".jsx"],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./frontend/src/index.html",
    }),
  ],
});
