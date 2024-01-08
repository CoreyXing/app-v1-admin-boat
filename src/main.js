import Vue from 'vue'
import App from './App.vue'
// 全局组件
// 第一个参数，全局组件的名字 第二个参数是哪一个组件
// Vue.component(TypeNav.name, TypeNav)
import router from './router'
import '@/assets/global.less' // 全局初始化样式
import '@/elementUI' // 注册elementUI组件
import store from '@/store' //挂载store实例
// 引入mockServer.js
import '@/mock/mockServer'
import { reqDishesName } from '@/api';
reqDishesName();
import { reqDishesVageName  } from '@/api';
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
import VueSvgIcon from 'vue-svgicon';
//svg图标的设置
import '@/assets/icons'
import svgIcon from '@/assets/icons/Svg.vue'
Vue.component('svg-icon', svgIcon)


Vue.use(VueSvgIcon,{
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em',
  isOriginalDefault: true,
  svgFolder: 'src/icons'
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
