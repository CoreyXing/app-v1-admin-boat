import request from '@/utils/request'
import mockRequests from './mockRequest'
import request from './request';
import mockRequests from './mockIndex';
// 服务器数据
// http://172.20.137.141:8080/api/foods/firstclass
export const reqGetFirstClass = () => request.get('/foods/firstclass');

// 获取第二大类的数据
export const reqGetSecondClass = (firstclass) => {
  return request({
    url:`/foods/secondclass?firstclass=${firstclass}`,
    method: 'get',
  })
}

// 获取具体食物
export const reqGetFoodName = (data) => {
  return request({
    url: '/foods/getbyclass',
    method: 'get',
    params: data
  })
}

// 根据食物id获取对应的详细信息
export const regGetFoodDetail = (food_id) => {
  return request({
    url:`/foods/getbyid/${food_id}`,
    method: 'get',
  })
}
// 模拟数据 知识图谱的展示
// 检索整个图谱
export const reqGetKnowData = ()=>mockRequests.get('/knowData');

// export const searchAPI = (query) => {
//   const CancelToken = axios.CancelToken
//   const source = CancelToken.source()
//   request.post('http://127.0.0.1/80/api/post',{
//       cancelToken: source.token,
//       data: {
//           name: 'zhangsan',
//           age: 18
//       }
//     }  
//   ).then((res) => {
//     console.log('res',res);
//   })
//   source.cancel('取消请求')
// }
/**
 * 注册接口
 * @param {*} param0 { username: 用户名, password: 密码 }
 * @returns Promise对象
 */
export const registerAPI = ({ username, password, repassword }) => {
  return request({
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
export const reqDishesName = () =>{
  return mockRequests({
    url:'/dishes',
    method:'get'
  })
}
/**
 * 请求模糊查询后的食物名称接口
 */
export const reqDishesVageName = () =>{
  return mockRequests({
    url:'/search',
    method:'post',
    data: keyword
  })
}
/**
 * 请求餐次记录接口 传的参数是intake_record对象
 */
export const reqMeals = (intake_record) =>{
  return mockRequests({
    url:'/meals',
    method:'post',
    data: intake_record
  })
}

