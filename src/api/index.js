import request from '@/utils/request'
import requests from './request'
import MockRequest from './mockRequest'

/**
 * 注册接口
 * @param {*} param0 { username: 用户名, password: 密码 }
 * @returns Promise对象
 */
export const registerAPI = ({ username, password, repassword }) => {
  return requests({
    url: '/api/reg',
    method: 'post',
    data: {
      username,
      password,
      repassword
    }
  })
}

/**
 * 登录接口
 * @param {*} param0 { username: 用户名, password: 密码 }
 * @returns Promise对象
 */
export const loginAPI = ({ username, password }) => {
  return request({
    url: '/api/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

/**
 * 请求食物名称接口
 */
// export const reqDishesName = () =>{
//   return requests({
//     url:'/dishes/key',
//     method:'get'
//   })
// }
export const reqDishesName = () =>{
  return MockRequest({
    url:'/dishes',
    method:'get'
  })
}
/**
 * 请求模糊查询后的食物名称接口
 */
// export const reqDishesVageName = (keyword) =>{
//   return requests({
//     url:'/dishes/key',
//     method:'get',
//     data: keyword
//   })
// }
// export const reqDishesVageName = (keyword) =>{
//   return MockRequest({
//     url:'/dishes/key',
//     method:'get',
//     data: keyword
//   })
// }
/**
 * 请求餐次记录接口 传的参数是intake_record对象
 */
// export const reqMeals = (intake_record) =>{
//   return requests({
//     url:'/meals/accept',
//     method:'post',
//     data: intake_record
//   })
// }
export const reqMeals = (intake_record) =>{
  return MockRequest({
    url:'/meals',
    method:'post',
    data: intake_record
  })
}


