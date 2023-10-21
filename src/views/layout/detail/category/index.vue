<template>
  <div>
    <el-page-header @back="goBack" content="类别详情页面" style="margin-bottom:20px;">
    </el-page-header>
    <!-- 这里加一个标题 -->
    <el-card class="image">
      <span style="font-size:26px;">谷类</span>
      <img src="@/assets/images/category.jpg"/>
    </el-card>
    <el-card>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="小麦" Consistency name="1">
          <div v-for="(item, index) in 1" :key="index">
            <el-row style="margin-left:50px;">
              <!-- 这里用link有问题，等到后续再修改吧，根据接口修改一下 -->
              <el-col :span="4" class="lightgreen-box"><el-link>小麦粉</el-link></el-col>
              <el-col :span="4" class="orange-box"><el-link>小麦粉（富强粉，特一粉）</el-link></el-col>
              <el-col :span="4" class="orange-box"><el-link>小麦粉（特二粉）</el-link></el-col>
              <el-col :span="4" class="orange-box"><el-link>小麦胚粉</el-link></el-col>
              <el-col :span="4" class="orange-box"><el-link>挂面</el-link></el-col>
              <el-col :span="4" class="orange-box"><el-link>挂面</el-link></el-col>
            </el-row>
          </div>
        </el-collapse-item>
        <el-collapse-item title="稻米" Consistency name="2">
          <div v-for="(item, index) in 4" :key="index">
            <el-row style="margin-left:50px;">
              <el-col :span="4" class="lightgreen-box"><el-link>小麦粉</el-link></el-col>
              <el-col :span="4" class="orange-box"><el-link>小麦粉（富强粉，特一粉）</el-link></el-col>
              <el-col :span="4" class="orange-box"><el-link>小麦粉（特二粉）</el-link></el-col>
              <el-col :span="4" class="orange-box"><el-link>小麦胚粉</el-link></el-col>
              <el-col :span="4" class="orange-box"><el-link>挂面</el-link></el-col>
              <el-col :span="4" class="orange-box"><el-link>挂面</el-link></el-col>
            </el-row>
          </div>
        </el-collapse-item>
        <el-collapse-item title="玉米" Consistency name="3">
          <div v-for="(item, index) in 4" :key="index">
            <el-row style="margin-left:50px;">
              <el-col :span="4" class="lightgreen-box"><el-link>小麦粉</el-link></el-col>
              <el-col :span="4" class="orange-box"><el-link>小麦粉（富强粉，特一粉）</el-link></el-col>
              <el-col :span="4" class="orange-box"><el-link>小麦粉（特二粉）</el-link></el-col>
              <el-col :span="4" class="orange-box"><el-link>小麦胚粉</el-link></el-col>
              <el-col :span="4" class="orange-box"><el-link>挂面</el-link></el-col>
              <el-col :span="4" class="orange-box"><el-link>挂面</el-link></el-col>
            </el-row>
          </div>
        </el-collapse-item>
        <el-collapse-item title="大麦" Consistency name="4">
          <div v-for="(item, index) in 4" :key="index">
            <el-row style="margin-left:50px;">
              <el-col :span="4" class="lightgreen-box"><el-link>小麦粉</el-link></el-col>
              <el-col :span="4" class="orange-box"><el-link>小麦粉（富强粉，特一粉）</el-link></el-col>
              <el-col :span="4" class="orange-box"><el-link>小麦粉（特二粉）</el-link></el-col>
              <el-col :span="4" class="orange-box"><el-link>小麦胚粉</el-link></el-col>
              <el-col :span="4" class="orange-box"><el-link>挂面</el-link></el-col>
              <el-col :span="4" class="orange-box"><el-link>挂面</el-link></el-col>
            </el-row>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>

<script>
import App from '@/App.vue';
export default {
  components: { App },
  name: "category",
  data() {
      return {
        activeNames: ['1'],
        dataTable:[
          "小麦粉","小麦粉（富强粉，特一粉）","小麦粉（特二粉）","小麦胚粉","挂面",
          "小麦粉","小麦粉（富强粉，特一粉）","小麦粉（特二粉）","小麦胚粉","挂面",
          "小麦粉","小麦粉（富强粉，特一粉）","小麦粉（特二粉）","小麦胚粉","挂面",
          "小麦粉","小麦粉（富强粉，特一粉）","小麦粉（特二粉）","小麦胚粉","挂面",
          "小麦粉","小麦粉（富强粉，特一粉）","小麦粉（特二粉）","小麦胚粉","挂面",
          "小麦粉","小麦粉（富强粉，特一粉）","小麦粉（特二粉）","小麦胚粉","挂面",
        ]
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      goBack(){
        this.$router.go(-1);
      }
    }
}
</script>

<style lang="less" scpoed>
  .image {
    margin-bottom:50px;
    text-align:center;
    img {
      width: 100px;
      height: 100px;
      float: right;
    }
    span {
      line-height:100px;
    }
  }
  .link {
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-between;
    width: 100%;
    float: left;
    .aLink{
      width: 25%;
      // margin-bottom:500px;
    }
  }
</style>