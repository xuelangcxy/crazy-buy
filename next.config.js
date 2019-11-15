const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const withSourceMap = require('@zeit/next-source-maps');

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
  require.extensions['.less'] = file => {};
}

module.exports = withSourceMap(withCSS({
  ...withLess({
    cssModules: true,
    distDir: 'dist',
    generateEtags: false,
    cssLoaderOptions: {
      // importLoaders: 1,
      modules: true,
      camelCase: 'only',
      localIdentName: "[name]__[local]--[hash:base64:5]",
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
      plugins: [require('less-plugin-functions')],
    },
  }),
  cssLoaderOptions: {
    modules: false,
  }
}));