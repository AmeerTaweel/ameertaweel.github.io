const path = require(`path`)
const CopyWebpackPlugin = require(`copy-webpack-plugin`)

module.exports = {
  outputDir: path.resolve(__dirname, `./production/public`),
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        { from: `./public/404.html` },
        { from: `./robots.txt` },
        { from: `./google8e36e7ad0bba5cc1.html` }
      ])
    ]
  }
}
