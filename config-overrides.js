const { override, fixBabelImports, babelInclude } = require('customize-cra')
const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  babelInclude([
    path.resolve('src'), // make sure you link your own source
  ]),
)
