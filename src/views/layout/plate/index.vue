<template>
  <div>
    <!-- 这里分为两部分 上方是搜索框 下方是结果展示区域 -->
    <div id="topContent">
      <el-card class="box-card" shadow="never">
        <div slot="header" class="clearfix">
          <div v-for="i in 4" :key="i" style="margin-right:30px;" >
            <el-select v-model="value" filterable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <el-button style="float: right; margin-left: 0.25rem;" type="primary" icon="el-icon-search">搜索</el-button>
        </div>
        <div v-for="o in 2" :key="o" class="text item">
          {{'列表内容 ' + o }}
          <el-row>
            <el-col :span="4" v-for="(item, index) in 4" :key="item" :offset="index > 0 ? 2 : 0">
              <el-card id="foodCard" :body-style="{ padding: '0px' }" shadow="hover">
                <i class="el-icon-grape"></i>
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </div>
    <!-- 结果展示区域 看怎么做才好 -->
  </div>
</template>

<script>
export default {
  name: "plate",
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  }
}
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 14px;
  }

  .clearfix {
    display: flex;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

</style>