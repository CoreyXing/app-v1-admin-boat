//foodtrack模块专属的小仓库
//任何的小仓库:state、mutations、actions、getters 
//引入请求函数
import { reqMeals } from "@/api";

//仓库存储数据的地方
const state = {
    //每餐次的记录的数据,仓库里面数据起始数值不要瞎写【服务器返回的是啥】根据接口的返回值初始化
    meals:[]

};

//唯一可以修改仓库数据地方【工人】
const mutations = {
    GETMEALS(state, meals) {
        state.meals = meals;
    }

};
//可以处理业务逻辑【if、异步语句等等】
let actions = {
        // 获取餐次的数据
        async getMeals({ commit },formName) {
            let result = await reqMeals(formName);
            if (result.code == 200) {
                commit("GETMEALS", result.data);
            }
        },

};
//仓库计算属性
let getters = {};

//对外暴露小仓库
export default {
    state,
    mutations,
    actions,
    getters
}