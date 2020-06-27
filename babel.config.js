const productionPlugin = []
// 判断是否是生产环境，决定是否加入插件
if (process.env.NODE_DEV === 'production') {
  productionPlugin.push('transform-remove-console')
}
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    // 生产环境插件
    ...productionPlugin,
    // 懒加载插件
    '@babel/plugin-syntax-dynamic-import'
    // '@babel/plugin-transform-runtime',
  ]
}
