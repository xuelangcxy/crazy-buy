const config = {
  presets: [
    [
      'next/babel',
      {
        'transform-runtime': {
          useESModules: false,
        },
        'styled-jsx': {
          plugins: ['styled-jsx-plugin-less', 'styled-jsx-plugin-postcss'],
        },
      },
    ],
  ],
  plugins: [
    ['import', { libraryName: 'antd', style: true }, 'antd'],
    ['import', { libraryName: 'antd-mobile', style: 'css' }, 'antd-mobile'],
    'lodash',
  ],
  compact: false,
};
if (process.env.API_ENV === 'dev') {
  // @ts-ignore
  // config.presets.push('@babel/preset-typescript');
}
module.exports = config;
