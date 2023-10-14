<template>
  <div>
    <div id="topContent">
      请输入您的当前体重：<el-input class="input" v-model="currentInput" placeholder="当前体重"></el-input>
      请输入您的目标体重：<el-input class="input" v-model="objectInput" placeholder="目标体重"></el-input>
      <el-button type="primary">查询</el-button>
    </div>
    <div id="bottomContent">
      <el-card class="box-card">
        主要是根据四个方面来进行推荐。主要是营养体能的康复。<br/>
        目的与功能：
        增肌减脂，从营养植入，体能训练，康复训练的角度全方位提高运动表现能力。<br/>
        具体内容：<br/>
        1.营养宜教 2.精准营养 3.增肌减脂 4.体能恢复
        <img src="@/assets/images/doubt.jpg"/>
      </el-card>
      <el-card class="box-card">
        这里显示推荐的结果，体重应该怎么变换。
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "plate",
  data() {
    return {
      currentInput: '',
      objectInput: ''
    }
  },

}
</script>

<style lang="less" scoped>
  #topContent {
    display: flex;
    justify-content: center;
    align-items: center;
    .input {
      margin: 0 50px;
      width: 200px;
    }
  }
  #bottomContent {
    margin-top:30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .box-card{
      width: 550px;
      text-align: center;
      img {
        width: 400px;
      }
    }
  }
</style>