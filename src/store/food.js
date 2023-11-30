import {reqGetFoodData,regGetFood} from '@/api/index'
export default {
  state: {
    searchList:{},
    second: [],
    food: [],
    detail: {}
  },

  mutations: {
    GETFOODSDATA(state, searchList) {
      state.searchList = searchList;
    },
    GETSECONDCLASS(state, secondClass) {
      state.second = secondClass;
    },
    GETFOODNAME(state, food) {
      state.food = food;
    },
    GETFOODDETAIL(state, detail) {
      state.detail = detail;
    }
  },

  actions: {
    // 这里是post是有载荷的
    async getFood({commit}) {
      let result = await reqGetFoodData();
      if (result.status === 200) {
        commit('GETFOODSDATA', result.data);
      }
    },

    // 获取第二类
    getSecondClass({commit}, second) {
      let secondClass = [...new Set(second.map( item => item.secondClass))];
      commit('GETSECONDCLASS', secondClass)
    },

    // 获取具体食物的名称
    getFoodName({commit}, foodName) {
      let food = [...new Set(foodName.map(item => item.foodName))];
      commit('GETFOODNAME', food);
    },

    // 获取详细信息
    async getFoodDetail({commit}, formLine) {
      let result = await regGetFood();
      if(result.code === 200) {
        commit('GETFOODDETAIL', result.data);
      }
    }
  }
}