const path = require('path')

module.exports = {
  outputDir: './build/',
  configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'), // 要是绝对路径
      components: '@/components'
    }
  }
  //链式调用
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // }
}
