<template>
  <div>
    <div>
    <el-row :gutter="20">
      <div class="col-container">
        <el-col :span="8">
          <div class="grid-content bg-purple input-container">
            请输入您的身高：<el-input v-model="input" placeholder="请输入身高(cm)"></el-input>
          </div>
        </el-col>
      </div>
      <div class="col-container">
        <el-col :span="8">
          <div class="grid-content bg-purple input-container">
            请输入您的体重：<el-input v-model="input" placeholder="请输入体重(kg)"></el-input>
          </div>
        </el-col>
      </div>
      <div class="col-container">
        <el-col :span="8">
          <div class="grid-content bg-purple input-container">
            请输入您的目标体重：<el-input v-model="input" placeholder="请输入目标体重(kg)"></el-input>
          </div>
        </el-col>
      </div>
    </el-row></div>
    <div class="button-container">
    <el-button type="primary" round>点击计算</el-button>
   </div>
  <div class="card-container">
    <canvas id="chart"></canvas>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-size: 20px;">慢速减体重</span>
        <el-button style="float: right; padding: 3px 0; font-size: 20px;" type="text">详细信息</el-button>
      </div>
      <div class="text item">
        <el-empty description="描述文字"></el-empty>
  </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-size: 20px;">快速减体重</span>
        <el-button style="float: right; padding: 3px 0; font-size: 20px;" type="text">详细信息</el-button>
      </div>
      <div class="text item">
        <el-empty description="描述文字"></el-empty>
  </div>
    </el-card>
  </div>
</div>
</template>

<style>
.card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.col-container {
        margin-right: 20px;
      }
.input-container {
      padding: 10px;
      }
      .button-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 8dvh; /* 可根据实际情况调整容器高度 */
      }
.box-card {
  width: 1000px;
  margin-right: 500px; /* 调整间隙大小，可以根据需要进行调整 */
}

.box-card:last-child {
  margin-right: 0; /* 移除最后一个卡片的右侧间隙 */
}
</style>
