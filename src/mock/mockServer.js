/**
 * 通过mock插件实现模拟数据
 */

//  先引入mockjs模块
import Mock from 'mockjs'

// 把Json数据格式引入进来【Json数据格式根本没有对外暴露，但是可以引入】
// webpack默认对外暴露的：图片、json数据格式
import dishes from './dishes.json'

// mock数据：第一个参数请求地址，第二个参数请求数据
//通过Mock.mock()方法进行模拟数据
Mock.mock('/mock/dishes', { code: 200, data: dishes })