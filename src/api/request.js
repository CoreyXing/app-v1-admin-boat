// axios的二次封装
import axios from 'axios';

// 创建一个自定的axios方法(比原axios多了个基地址)
// axios函数请求的url地址前面会被拼接基地址, 然后axios请求baseURL+url后台完整地址
// baseURL, timeout, header, responseType, withCredentials
const requests = axios.create({
  // baseURL: 'http://big-event-vue-api-t.itheima.net'
    // baseURL: "http://localhost:8081/",
    baseURL: '/api',
    timeout: 5000,
    // responseType: "json",
})

//响应拦截器
// requests.interceptors.response.use((res)=>{
//   //成功的回调函数：服务器相应数据回来以后。响应拦截器可以检测到，可以做一些事情
//   //进度条结束
//   return res.data;
// },(error)=>{
//   //响应失败的回调函数
//   return Promise.reject(new Error('failer'));
// })


// let cancelToken = axios.CancelToken;
// console.log(cancelToken)
// 导出自定义的axios方法, 供外面调用传参发请求
export default requests;
