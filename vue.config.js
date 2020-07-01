module.exports = {
  publicPath: '/', // process.env.NODE_ENV === 'production' ? './' :
  devServer: {
    proxy: {
      //
      // 需要进行代理的路径，这里的意思就是以/api开头的请求都会被代理到target下去
      // 比如你请求http://localhost:8080/api/category/此时就会请求http://127.0.0.1:12345/api/category/
      // 注意这里的/api会被拼接到target后面，我一开始这里填的http://127.0.0.1:12345/api/老出错后面才发现
      '/api': {
        // 真实的请求地址
        target: 'http://127.0.0.1:12345',
        // 是否跨域
        changeOrigin: true,
        // 重写路径，就是将/api重写为你想要的值,不需要重写可以不写好像，我这只是为了好看点
        // 比如你的后台接口是http://127.0.0.1:12345/liulib/，此时你就需要将api重写为liulib
        // 也就是'^/api': '/liulib'
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  chainWebpack: config => {
    // 发布模式
    config.when(process.env.NODE_ENV === 'production', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-prod.js')
      // 使用externals加载cdn
      config.set('externals', {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        axios: 'axios',
        nprogress: 'NProgress',
        moment: 'moment'
      })
      // 挂载参数isProd到index.html中 用它来定制首页内容
      config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
      })
    })
    // 开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-dev.js')

      // 挂载参数isProd到index.html中 用它来定制首页内容
      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })
    })
  }
}
