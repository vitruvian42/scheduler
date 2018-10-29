const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require('path')


const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
    output: {
        // `filename` provides a template for naming your bundles (remember to use `[name]`)
        filename: '[name].bundle.js',
        // `chunkFilename` provides a template for naming code-split bundles (optional)
        chunkFilename: '[name].bundle.js',
        // `path` is the folder where Webpack will place your bundles
        path: path.resolve('dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                }
            },
            {
              test: /\.scss$/,
              loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
              test: /\.css/,
              loaders: ["style-loader", "css-loader", "sass-loader"]
            },
        ]
    },
    plugins: [htmlWebpackPlugin]
};