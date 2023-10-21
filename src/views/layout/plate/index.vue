<template>
  <div>
    <!-- 这里分为两部分 上方是搜索框 下方是结果展示区域 -->
    <div id="topContent">
      <el-card class="box-card" shadow="never">
        <div slot="header" class="clearfix">
        根据您每餐的摄入情况，单击或者拖动食物到餐盘里，点击算一算按钮查看计算结果：
        </div>
        <div>
          <el-row class="row">
            <el-col :span="8">
                半荤菜：<el-select v-model="value" clearable filterable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
                根基素菜：<el-select v-model="value" clearable filterable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
                主食：<el-select v-model="value" clearable filterable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row class="row">
            <el-col :span="8">
                纯肉菜：<el-select v-model="value" clearable filterable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
                花叶素菜：<el-select v-model="value" clearable filterable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
                水果：<el-select v-model="value" clearable filterable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row class="row">
            <el-col :span="8">
                奶制品：<el-select v-model="value" clearable filterable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
              <el-button type="primary">算一算</el-button>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </div>
    <!-- 结果展示区域 看怎么做才好 左边为餐盘 右边为显示的结果-->
    <div id="bottomContent">
      <div id="left">
        <el-card class="box-card">
          存放选择的结果
          <img src="@/assets/images/plate.jpg"/>
        </el-card>
      </div>
      <div id="right">
        <el-card class="box-card">
          存放搜索的结果<br/>
          热量：...<br/>
          营养成分：...<br/>
          需要怎么消耗掉：....等等信息。<br/>
          具体信息待考察
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "plate",
  data() {
    return {
      options: [{
        value: '选项1',
        label: '白菜炖豆腐'
      }, {
        value: '选项2',
        label: '醋溜白菜'
      }, {
        value: '选项3',
        label: '蒜蓉油麦菜'
      }, {
        value: '选项4',
        label: '炒小白菜'
      }, {
        value: '选项5',
        label: '清炒芥菜'
      },{
        value: '选项6',
        label: '鸡蛋炒菠菜'
      },{
        value: '选项7',
        label: '韭菜炒鸡蛋'
      },{
        value: '选项8',
        label: '炝炒圆白菜'
      },{
        value: '选项9',
        label: '香椿炒鸡蛋'
      }],
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>
  .clearfix {
    display: flex;
    align-items: center;
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
    width: 100%;
    .row {
      margin-bottom: 10px;
    }
  }
  #bottomContent {
    display: flex;
    justify-content: space-between;
    .box-card {
      font-size: 16px;
      margin-top: 20px;
      width: 550px;
      height: 300px;
    }
  }
</style>