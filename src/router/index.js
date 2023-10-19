import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由信息
import routes from './route'

Vue.use(VueRouter)

// 重写路由方法
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
// 重写push|replace
// arg1：告诉原来push方法，往哪里跳转，需要传递哪些参数
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => {}, () => {})
  }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    // 这样的话调用原来的push方法
    originReplace.call(this, location, resolve, reject)
  } else {
    // 因为保存的时候 在window里面 所以要改变this指向 这里相当于修改了一下原方法
    originReplace.call(this, location, () => {}, () => {})
  }
}
// 配置路由
export default new VueRouter({
  routes
})
