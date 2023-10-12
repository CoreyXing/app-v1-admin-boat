<template>
  <div>
    <!-- 主要分为两部分，一个搜索栏，一个显示的分类，一个结果，看能否在一个页面上实现 -->
    <div id="topContent">
      <el-card class="box-card" shadow="never">
        <div slot="header" class="clearfix">
          <el-select style="width:800px;"  v-model="value" filterable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
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
    <div id="bottomContent">
      <el-card class="box-card" shadow="never">
        展示搜索内容
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
    <div></div>
  </div>
</template>

<script>
export default {
  name: "search",
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

<style lang="less" scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 14px;
    .foodCard {
      width:20px;
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

  #topContent {
    margin-bottom: 20px;
    .box-card {
      height: 300px;  
    }
  }

  #bottomConten {
    .box-card {
      width: 1200px; 
      height: 200px; 
    }
  }
</style>