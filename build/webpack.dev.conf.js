var path = require('path');
var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
// webpack错误信息提示插件
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

var glob = require('glob')
// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})
module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // 跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误。
    new webpack.NoErrorsPlugin(),
    new FriendlyErrorsPlugin()
  ]
})

var pages =  utils.getMultiEntry('./src/'+config.moduleName+'/**/*.html');
console.log("webpack.dev.conf.js=================")
console.log(pages);
for (var pathname in pages) {
  // 配置生成的html文件，定义路径等
  var conf = {
    filename: pathname + '.html',
    template: pages[pathname], // 模板路径
    chunks: [pathname, 'vendors', 'manifest'], // 每个html引用的js模块
    inject: true              // js插入位置
  };
  // 需要生成几个html文件，就配置几个HtmlWebpackPlugin对象
  module.exports.plugins.push(new HtmlWebpackPlugin(conf));
}
