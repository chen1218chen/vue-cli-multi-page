var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
var glob = require('glob')
var env = process.env.NODE_ENV
// check env & config/index.js to decide weither to enable CSS Sourcemaps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

console.log("********webpack.base.conf.js*******");
var entries =  utils.getMultiEntry('./src/'+config.moduleName+'/**/*.js'); // 获得入口js文件
console.log(entries);
var chunks = Object.keys(entries);

const webpackConfig = {
 /* entry: {
    app: './src/modules/index/main.js',
    phone: './src/modules/phone/main.js'
  },*/
  entry:entries,
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].[hash].js'//生成 vendors.61714a310523a3df9869.js,每次生成都不会覆盖之前的代码，以方便查BUG或者回滚。
    //  filename: '[name].js'  生成vendors.js?f3aaf25de220e214f84e,每次都会覆盖之前生成的资源，方便在某些特殊项目使用。
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.scss'],//当requrie的模块找不到时，添加这些后缀
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue$': 'vue/dist/vue',
      'src': path.resolve(__dirname, '../src'),
      'api':path.resolve(__dirname,'../src/api'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'common': path.resolve(__dirname,'../src/common'),
      'components': path.resolve(__dirname, '../src/components'),
      'scss_vars': path.resolve(__dirname, '../src/styles/vars.scss'),
      'styles': path.resolve(__dirname, '../src/styles'),
      'indexPath': path.resolve(__dirname, '../src/modules/index'),
      'phonePath': path.resolve(__dirname, '../src/modules/phone'),
      'vux-components': 'vux/src/components/'
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader",
      },
      { 
        test: /\.(scss|sass)$/, 
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  vue: {
    loaders: utils.cssLoaders({ sourceMap: useCssSourceMap }),
    postcss: [
    require('autoprefixer')({
      browsers: ['last 2 versions']
    })
    ]
  }
}

const vuxLoader = require('vux-loader');
module.exports = vuxLoader.merge(webpackConfig, {
  options: {},
  plugins: [
  {
    name: 'vux-ui'
  }
  ]
})