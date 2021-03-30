const mixin = {
  methods: {
    toLogin() {
      if (process.env.ENV_CONFIG === 'sit') {
        // 测试
        window.location.href = 'http://omp.dev.youlanw.com/login'
      } else if (process.env.ENV_CONFIG === 'prod') {
        // 生产
        console.log('生产环境登录页')
      } else {
        // 开发
        window.location.href = 'http://omp.dev.youlanw.com/login'
      }
    }
  }
}
export default mixin
