<template>
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
    </el-row>
    <div class="button-container">
    <el-button type="primary" round>点击计算</el-button>
   </div>
<div class="container-wrapper">
    <div class="container-item">
        <el-container>
  <el-header>精准营养</el-header>
  <el-main>
    <div class="card-container">
      <div class="card-row">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>推荐碳水化合物摄入</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div class="text item">
            运动员推荐的碳水化合物摄入量为6~10g/kg体重/d。摄入足够的碳水化合物能保证运动期间的血糖水平，并补充肌糖原。
          </div>
        </el-card>

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>推荐蛋白质摄入</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div class="text item">
            耐力和力量型运动员推荐的蛋白质摄入量为1.2~1.6g/kg体重/d。摄入足够维持体重的能量能使蛋白质利用优化，有助于运动表现。
          </div>
        </el-card>
      </div>

      <div class="card-row">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>推荐脂肪摄入</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div class="text item">
            脂肪摄入是总能量摄入的20%~30%
          </div>
        </el-card>

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>推荐水分摄入</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div class="text item">
            保持水合状态：运动时尽可能披照（0.5~2）L/h的补液量进行多次补充，以将脱水量控制在体重的2%以下，对于出汗量高、时间超过2h的运动应注意钠的补充，运动后补液可按照体重丢失的150%补充运动饮料，并添加钠盐以促进水分吸收。
          </div>
        </el-card>
      </div>
    </div>
  </el-main>
</el-container>
    </div>
    <div class="container-item">
        <el-container>
  <el-header>营养监控</el-header>
  <el-main>
    <p>三大营养素：</p>
    <div class="progress-container">
    <div class="progress-item">
      <el-progress type="circle" :percentage="25"></el-progress>
      <div class="progress-text">碳水化合物</div>
    </div>

    <div class="progress-item">
      <el-progress type="circle" :percentage="100" status="success"></el-progress>
      <div class="progress-text">蛋白质</div>
    </div>

    <div class="progress-item">
      <el-progress type="circle" :percentage="70" status="warning"></el-progress>
      <div class="progress-text">脂肪</div>
    </div>
  </div>
  </el-main>
</el-container>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  }
}
</script>
    <style>
      .el-row {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .el-col {
        border-radius: 4px;
      }
      .col-container {
        margin-right: 20px;
      }
      .input-container {
      padding: 10px;
      }
      .bg-purple-dark {
        background: #99a9bf;
      }
      .bg-purple {
        background: #d3dce6;
      }
      .bg-purple-light {
        background: #e5e9f2;
      }
      .grid-content {
        border-radius: 4px;
        min-height: 36px;
      }
      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }
      .button-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 8dvh; /* 可根据实际情况调整容器高度 */
      }
      .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
      }
    .progress-text {
        margin-top: 10px;
        text-align: center;
    }
    .progress-container {
        display: flex;
        justify-content: space-around;
    }
    .progress-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
    }
    .text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .container-wrapper {
  display: flex;
  justify-content: space-between;
}

.container-item {
  flex: 1;
  margin-right: 20px;
}
.card-container {
  display: flex;
  flex-direction: column;
}

.card-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.box-card {
  width: 500px;
  height: 300px;
}

.text.item {
  margin-bottom: 10px;
}
</style>
