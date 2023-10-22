<template>
  <div>
    <!-- 搜索框 -->
    <el-row>
      <el-col :span="24">
        <div class="topContent">
            <h1 style="text-align:center;font-size:36px;color:#666;">营养成分查询平台</h1>
            <div class="content">
              <el-input
                placeholder="请输入内容"
                v-model="input"
                clearable>
              </el-input>
              <el-button @click="handleClick" type="primary" icon="el-icon-search">搜索</el-button>
            </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div>
          <h1 style="text-align:center;font-size:36px;color:#666;">食物分类/Food Groups</h1>
          <div class="cardContent">
            <el-card v-for="item in cardData" :key="item.id">
              <div slot="header" class="clearfix">
                <i class="el-icon-menu"></i>
                <span>{{ item.name }}</span>
              </div>
              <div class="detail" v-for="o in item.category" :key="o">
                <a class="text item" href=''>{{ o }}</a>
              </div>
            </el-card>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 食物分类的清单 -->
    <div>

    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      input:'',
      cardData: [
        {
          id: 1,
          name: '谷类及制品',
          category: ["小麦","稻米","玉米","大麦","小米，黄米","其他"] 
        },
        {
          id: 2,
          name: '薯类，淀粉及制品',
          category: ["薯类","淀粉"] 
        },
        {
          id: 3,
          name: '干豆类及制品',
          category: ["大豆","绿豆","赤豆","芸豆","蚕豆","其他"] 
        },
           {
             id: 4,
          name: '蔬菜类及制品',
          category: ["根菜类","鲜豆类","茄果，瓜菜类","葱蒜类","嫩茎，叶，花菜类","水牛蔬菜类","薯芋类","野生出彩类"] 
        },
           {
             id: 5,
          name: '菌藻类',
          category: ["菌类","藻类"] 
        },
           {
             id: 6,
          name: '水果类及制品',
          category: ["仁果类","核果类","浆果类","柑橘类","热带，亚热带水果","瓜果类"] 
        },
           {
             id: 7,
          name: '坚果，种子类',
          category: ["树坚果","种子"] 
        },
        {
          id: 8,
          name: '谷类及制品',
          category: ["小麦","稻米","玉米","大麦","小米，黄米","其他"] 
        },
        {
          id: 9,
          name: '薯类，淀粉及制品',
          category: ["薯类","淀粉"] 
        },
           {
             id: 10,
          name: '干豆类及制品',
          category: ["大豆","绿豆","赤豆","芸豆","蚕豆","其他"] 
        },
           {
             id: 11,
          name: '蔬菜类及制品',
          category: ["根菜类","鲜豆类","茄果，瓜菜类","葱蒜类","嫩茎，叶，花菜类","水牛蔬菜类","薯芋类","野生出彩类"] 
        },
           {
             id: 12,
          name: '菌藻类',
          category: ["菌类","藻类"] 
        },
           {
             id: 13,
          name: '水果类及制品',
          category: ["仁果类","核果类","浆果类","柑橘类","热带，亚热带水果","瓜果类"] 
        },
           {
             id: 14,
          name: '坚果，种子类',
          category: ["树坚果","种子"] 
        },
        {
          id: 15,
          name: '谷类及制品',
          category: ["小麦","稻米","玉米","大麦","小米，黄米","其他"] 
        },
        {
          id: 16,
          name: '薯类，淀粉及制品',
          category: ["薯类","淀粉"] 
        },
           {
             id:17,
          name: '干豆类及制品',
          category: ["大豆","绿豆","赤豆","芸豆","蚕豆","其他"] 
        }
      ]
    }
  },
  methods:{
    handleClick() {
       console.log('esruiwheri')
       this.$router.push({name: "detail"});
    }
  }
}
</script>

<style lang="less" scoped>
  .topContent {
      background-color: #bfa;
      border: solid 1px red;
      height: 250px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    .content {
      width: 550px;
      .el-input {
        width: 75%;
        margin-right: 10px;
      }
    }
  }

  .cardContent {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: space-between;
    .el-card {
      padding: 0;
      width: 18%;
      height: 250px;
      margin-bottom: 20px;
      border: solid 1px #bfa;
      span{
        margin-left: 10px;
        font-size: 16px;
      }
      .detail {
        .text {
          display: inline-block;
          font-size: 14px;
          color: #000;
          width: 50%;
          float: left;
          text-decoration: none;
        }

        .item {
          margin-bottom: 18px;
        }
      }
    }
    
  }
</style>