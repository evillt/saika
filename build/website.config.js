const pkg = require('../package')

module.exports = {
  entry: 'website/index.js',
  output: {
    dir: 'website/dist',
    html: {
      title: 'Saika'
    }
  },
  publicFolder: 'website/public',
  chainWebpack(config) {
    config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js')
  },
  constants: {
    __SAIKA_VERSION__: JSON.stringify(pkg.version),
    __DEPS__: JSON.stringify(Object.keys(pkg.dependencies))
  }
}
