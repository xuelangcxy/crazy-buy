const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');

module.exports = withCSS(withLess({
  cssModules: true,
  distDir: 'dist',
  generateEtags: false,
  // cssLoaderOptions: {
  //   importLoaders: 1,
  //   localIdentName: "[local]___[hash:base64:5]",
  // },
  lessLoaderOptions: {
    javascriptEnabled: true,
    plugins: [require('less-plugin-functions')],
  }
}));