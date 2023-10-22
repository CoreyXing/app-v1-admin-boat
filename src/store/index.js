import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import tab from '@/store/tab'
import user from '@/store/user'
Vue.use(Vuex)
// 创建vuex实例
export default new Vuex.Store({
  // 配置为 vuex 的插件
  plugins: [createPersistedState()],
  modules: {
    tab,
    user
  }
})
