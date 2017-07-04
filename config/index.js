// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');

module.exports = {
  moduleName:'modules', 
  
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/modules/index/index.html'),
    phone: path.resolve(__dirname, '../dist/modules/phone/phone.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
},
dev: {
    env: require('./dev.env'),
    port: 8088,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        '/api/*': {
           target:'http://127.0.0.1:8080/Urban/rest',
           // target: 'http://'+rootIP,
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            }
        }
    },
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
}
