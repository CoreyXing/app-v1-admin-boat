<template>
  <div>
    <el-page-header @back="goBack" content="小麦详情页面">
    </el-page-header>
    <div id="topSearch">
      <el-card class="box-card" shadow="never">
        <div class="clearfix">
          <el-input
            style="width:800px;"
            placeholder="请输入内容"
            v-model="input"
            clearable>
          </el-input>
          <el-button @click="search" style="float: right; margin-left: 0.25rem;" type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </el-card>
    </div>
    <div id="parentCard">
      
      <div v-for="(item, index) in 8" :key="index">
        <el-card class="box-card">       
            小麦：    <br/>
            功效：子宫肌瘤，尖锐湿疣，跖疣    <br/>
            能量：339 千卡    <br/>
            蛋白质: 11.9 克,    <br/>
            脂肪:  1.3 克,    <br/>
            碳水化合物: 75.2 克
          <el-button type="text" @click="clickDetail">查看详细信息</el-button>
          <el-dialog
            title="小麦粉的营养成分列表"
            :visible.sync="dialogTableVisible"
            center>
            <el-table :data="gridData">
              <el-table-column property="name" label="营养名称" width="150"></el-table-column>
              <el-table-column property="number" label="数值" width="200"></el-table-column>
              <el-table-column property="unit" label="单位"></el-table-column>
            </el-table>
          </el-dialog>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail",
  data(){
    return {
      tableData: [{
        name: '小麦',
        effect: '子宫肌瘤,尖锐湿疣,跖疣',
        nutrition: '千卡',
        lipid: '',
        mineral: '',
        vitamin: '',
        amino:'', 
      }],
      gridData: [{
        name: '能量',
        number: '349',
        unit: '千卡'
      }, {
        name: '蛋白质',
        number: '11.2',
        unit: '克'
      }, {
        name: '脂肪',
        number: '1.5',
        unit: '克'
      }, {
        name: '碳水化合物',
        number: '71.6',
        unit: '克'
      },{
        name: '粗纤维',
        number: '2.1',
        unit: '克'
      }],
      dialogTableVisible: false,
      input:''
    }
  },
  methods:{
    clickDetail(index){
      console.log("输出index", index);
      // 这里跳转到具体页面，显示出详细信息
      // this.$router.push({name : "detailFood"})
      this.$router.push({name:"detailTable"})
    },
    goBack() {
        console.log('go back');
        // 这里返回上一级的路由
        this.$router.go(-1);
        
    }
  }
}
</script>

<style lang="less" scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }
  #parentCard {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    .box-card {
      width: 100%;
      height: 200px;
      font-size: 1rem;
      margin-top:20px;
      // flex:1;
      .el-button {
        float: right;
      }
    }
  }
  .clearfix {
    display: flex;
    justify-content: center;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  #topSearch {
    .box-card {
      // background-image: url('@/assets/images/food.jpg');
      height: 100%;
      margin:10px 0;  
    }
  }
</style>