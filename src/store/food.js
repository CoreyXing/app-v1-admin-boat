import {reqGetFirstClass,regGetFoodDetail, reqGetSecondClass, reqGetFoodName} from '@/api/index'
const state = {
  firstclass:[],
  secondclass: [],
  food: [],
  detail: {},
}

const  mutations = {
  GETFOODSFIRSTCLASS(state, firstclass) {
    state.firstclass = firstclass;
  },
  GETSECONDCLASS(state, secondClass) {
    state.secondclass = secondClass;
  },
  GETFOODNAME(state, food) {
    state.food = food;
  },
  GETFOODDETAIL(state, detail) {
    state.detail = detail;
  }
}

let actions = {
  async getFoodFirstClass({commit}) {
    let result = await reqGetFirstClass();
    if (result.status === 200) {
      commit('GETFOODSFIRSTCLASS', result.data);
    }
  },

  // 获取第二类 载荷firstclass
  async getSecondClass({commit}, firstclass) {
    let result = await reqGetSecondClass(firstclass);
    if (result.status === 200) {
      
      commit('GETSECONDCLASS', result.data)
    }
  },

  // 获取具体食物的名称
  async getFoodName({commit}, query) {
    console.log('store', query)
    let result = await reqGetFoodName(query);
    if (result.status === 200) {
      commit('GETFOODNAME', result.data)
    }
  },

  // 获取详细信息
  async getFoodDetail({commit}, food_id) {
    let result = await regGetFoodDetail(food_id);
    if(result.status === 200) {
      commit('GETFOODDETAIL', result.data);
    }
  }
}
let getters = {
  firstClass(state) {
    return state.firstclass || [];
  },
  secondClass(state) {
    return state.secondclass || [];
  },
  food(state) {
    return state.food || [];
  },
  detail(state) {
    return state.detail || {};
  },
}

//对外暴露小仓库
export default {
  state,
  mutations,
  actions,
  getters
}