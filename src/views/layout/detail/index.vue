<template>
  <div>
    这里是食物详细的页面，展示和搜索关键词相关联的食物
    <div v-for="(item, index) in 4" :key="index">
      <el-card class="box-card">       
          小麦：    <br/>
          功效：子宫肌瘤，尖锐湿疣，跖疣    <br/>
          能量：339 千卡    <br/>
          蛋白质: 11.9 克,    <br/>
          脂肪:  1.3 克,    <br/>
          碳水化合物: 75.2 克
        <el-button type="text" @click="dialogTableVisible = true">查看详细信息</el-button>
        <el-dialog title="小麦粉的营养成分列表" :visible.sync="dialogTableVisible">
          <el-table :data="gridData">
            <el-table-column property="name" label="营养名称" width="150"></el-table-column>
            <el-table-column property="number" label="数值" width="200"></el-table-column>
            <el-table-column property="unit" label="单位"></el-table-column>
          </el-table>
        </el-dialog>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail",
  data(){
    return {
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
    }
  },
  methods:{
    clickDetail(index){
      console.log("输出index", index);
      // 这里跳转到具体页面，显示出详细信息
      // this.$router.push({name : "detailFood"})
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

  .box-card {
    width: 450px;
    height: 200px;
    font-size: 1rem;
    .el-button {
      float: right;
    }
  }
</style>