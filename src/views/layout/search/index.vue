<template>
  <div>
    <!-- 主要分为两部分，一个搜索栏，一个显示的分类，一个结果，看能否在一个页面上实现 -->
        <!-- 主要分为两部分，一个搜索栏，一个显示的分类，一个结果，看能否在一个页面上实现 -->
    <!-- <div id="topSearch">
      <el-card class="box-card" shadow="never">
        <div class="clearfix">
          <el-select style="width:800px;"  v-model="value" clearable filterable placeholder="请输入食品名称">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-button @click="search" style="float: right; margin-left: 0.25rem;" type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </el-card>
    </div> -->
    <div id="topContent">
      <el-card class="box-card" shadow="never">
        <div slot="header" class="clearfix">
          <el-input
            style="width:800px;"
            placeholder="请输入内容"
            v-model="input"
            clearable>
          </el-input>
          <el-button @click="search" style="float: right; margin-left: 0.25rem;" type="primary" icon="el-icon-search">搜索</el-button>
        </div>
        <div v-for="o in 2" :key="o" class="text item">
          {{'列表内容 ' + o }}
          <el-row>
            <el-col :span="2" v-for="(i, index) in 6" :key="i" :offset="index > 0 ? 2 : 0">
              <el-card
                id="foodCard" 
                :body-style="{ padding: '0px'}" 
                shadow="hover"
                @click.native="clickCard(i)">
                <div style="padding: 14px;">
                  <i class="el-icon-grape"></i><br/>
                  <span>谷类</span>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <img style="max-width: 100%; height:auto;" src="@/assets/images/food.jpg"/>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      input: '',
      options: [{
        value: '选项1',
        label: '谷类'
      }, {
        value: '选项2',
        label: '薯类'
      }, {
        value: '选项3',
        label: '豆类'
      }, {
        value: '选项4',
        label: '蔬菜'
      }, {
        value: '选项5',
        label: '菌类'
      }],
      value: ''
    }
  },
  methods: {
    // 根据输入的内容，点击搜索出现具体的食物
    search() {
      console.log('点击了搜索');
      this.$router.push({name: "detail"});
    },
    // 点击卡片触发的事件, 如果点击跳出具体分类的食物
    clickCard(i) {
      console.log("点击item",i);
      this.$router.push({name : "category"})
      // 如果点击到具体的食物 跳转到具体的页面详情
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
    #foodCard {
      width:120px;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        text-align: center;
        i {
          color: purple;
        }
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
      margin-bottom: 10px;  
    }
  }
</style>