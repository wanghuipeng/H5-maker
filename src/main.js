import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
// 引入设置的store
import store from '@/store'
// 引入element-ui组件和样式库
import '@/plugins/element.js'
// 引入全局mixin
import '@/plugins/mixins.js'
// 引入storage
import '@/plugins/storage.js'
// 引入公共样式
import '@/assets/sass/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
