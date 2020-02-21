var path = require('path')

module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@icons': path.resolve(__dirname, 'public/img/icons/')
      }
    }
  }
}
