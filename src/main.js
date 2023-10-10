import Vue from 'vue'
import App from './App.vue'
// 全局组件
// import TypeNav from './components/TypeNav'
// 第一个参数，全局组件的名字 第二个参数是哪一个组件
// Vue.component(TypeNav.name, TypeNav)
import router from './router'
import '@/assets/global.less' // 全局初始化样式
import '@/elementUI' // 注册elementUI组件
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
