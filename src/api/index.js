import request from './request';
import mockRequests from './mockIndex';
// 服务器数据
export const reqGetFoodData = () => request.get('/foods');
// 模拟数据 知识图谱的展示
// 检索整个图谱
export const reqGetKnowData = ()=>mockRequests.get('/knowData');
// 根据关键字返回
// export const regPostKnow = (params) => mockRequests.post('./',params);
export const regGetFood = () => mockRequests.get('/food')

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
