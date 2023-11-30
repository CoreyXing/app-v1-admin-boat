/**
 * 图谱数据源源
**/
import Mock from 'mockjs';
import data from './data.json';
import foodData from '@/mock/foodData';
// mock数据，第一个参数请求地址，第二个参数：请求数据
Mock.mock('/mock/knowData', {code:200,data});
Mock.mock('/mock/food', {code:200,data: foodData});
/**
* 模糊查询大类
* @param {*} name 
*/
export const search = (name)=>{
  return new Promise((resolve,reject)=>{
      let result = {
          seriesData: [],
          linksData: []
      }
      let list = data.filter(item=>item.name.indexOf(name)>=0)
      if(list&&list.length>0){
          result.seriesData = list ||[];
      }else{
          result.seriesData = data ||[];
      }
      result.linksData = linkData ||[];
      if(list.length>0){
          resolve(result)
      }else{
          reject()
      }
  })
}


export const getAllData = ()=>{
  return new Promise((resolve,reject)=>{
      let result = {
          seriesData: [],
          linksData: []
      }
      result.seriesData = data||[];
      result.linksData = linkData ||[];
      if(data.length>0){
          resolve(result)
      }else{
          reject()
      }
  })
}

/**
* 分类2
*/
export const categarys =  ["建设用地"]
