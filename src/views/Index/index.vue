<template>
  <!-- 首页 -->
  <div id="index">
    <!-- 自定义头部 -->
    <My-Header></My-Header>
    <!-- 主体内容 -->
    <main class="w">
      <!-- 顶部 -->
      <div class="top-wrap flex justify-between">
        <div class="title">
          <h2>Audience Overview</h2>
          <span>Rosevile,CA</span>
        </div>
        <!-- 切换标签 -->
        <ul class="tabs-wrap flex align-items">
          <li
            @click="tagTab(index)"
            :class="{'active':index==tab}"
            v-for="(item,index) of tabs"
            :key="index"
          >
            <span>{{item.title}}</span>
          </li>
        </ul>
      </div>
      <!-- 轮播和表格 -->
      <div class="carousel-table-wrap flex">
        <!-- 轮播 -->
        <div class="carousel flex-item">
          <el-carousel>
            <el-carousel-item v-for="item in 4" :key="item">
              <span class="box-img">{{item}}</span>
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- 表格 -->
        <div class="table flex-item">
          <!-- 顶部标题 -->
          <div class="title-content flex align-items justify-between">
            <h3>Support Requests</h3>
            <el-button plain>朴素按钮</el-button>
          </div>
          <div class="table-wrap">
            <ul class="th flex align-items">
              <li class="item1">TIME</li>
              <li class="item2 flex-item">USE NAME</li>
              <li class="item3">STATUS</li>
            </ul>
            <div class="table-body">
              <ul v-for="(item,index) of 2" :key="index" class="td flex align-items">
                <li class="item1">9:45pm</li>
                <li class="item2 flex-item">info@design.com</li>
                <li class="item3">
                  <el-button type="success" size="small">solved</el-button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 曲线数据展示 -->
      <Smoothed-Line :series="series" :xAxis="xAxis"></Smoothed-Line>
      <!-- 饼状和柱状 -->
      <div class="pie-bar-wrap flex">
        <div class="pie-wrap flex-item">
          <Pie :series="series" :xAxis="xAxis"></Pie>
        </div>
        <div class="bar-wrap flex-item">
          <Bar :series="series" :xAxis="xAxis"></Bar>
        </div>
      </div>
    </main>
    <!-- 自定义尾部 -->
    <My-Footer></My-Footer>
  </div>
</template>

<script>
// 头部组件
import MyHeader from "@c/MyHeader";
import SmoothedLine from "@c/SmoothedLine";
import MyFooter from "@c/MyFooter";
import Pie from "@c/Pie";
import Bar from "@c/Bar";
// 接口
import { getEchart } from "@/api/index";
export default {
  data() {
    return {
      tab: 0, // 默认激活标签
      tabs: [
        // 标签导航数据
        {
          title: "HTML基础",
          url: ""
        },
        {
          title: "HTML入门",
          url: ""
        },
        {
          title: "CSS基础",
          url: ""
        },
        {
          title: "HTML5",
          url: ""
        },
        {
          title: "CSSHack",
          url: ""
        }
      ],
      series: [],
      xAxis: []
    };
  },
  methods: {
    tagTab(index) {
      this.tab = index;
    }
  },
  components: {
    MyHeader,
    SmoothedLine,
    Pie,
    Bar,
    MyFooter
  },
  created() {
    getEchart({ type: "week" }).then(responseData => {
      this.series = responseData.data.data.series;
      this.xAxis = responseData.data.data.xAxis;
    });
    
  }
};
</script>

<style lang="less" scoped>
#index {
  // 主体内容
  main {
    margin-top: 60px;
    // 顶部
    .top-wrap {
      // 左侧标题
      .title {
        > h2 {
          font-size: 30px;
        }
        > span {
          line-height: 24px;
          font-size: 15px;
          color: #6d7274;
        }
      }
      // 右侧导航
      .tabs-wrap {
        > li {
          cursor: pointer;
          margin: 0 15px;
          padding-bottom: 8px;
          font-size: 13px;
        }
        .active {
          border-bottom: 2px solid #cccfd0;
        }
      }
    }
    // 轮播图和表格
    .carousel-table-wrap {
      margin-top: 50px;
      .carousel {
        padding: 10px;
        background: #fff;
        height: 290px;
        margin-right: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        /deep/ .el-carousel {
          /deep/ .el-carousel__container {
            height: 270px;
            /deep/ .box-img {
              display: inline-block;
              width: 100%;
              font-size: 20px;
              padding: 100px;
              text-align: center;
              height: 100%;
              border-radius: 3px;
              background: red;
            }
          }
        }
      }
      // 表格
      .table {
        height: 290px;
        background: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        // 标题
        .title-content {
          height: 110px;
          border-bottom: 1px solid #e9e9ea;
          padding: 40px 50px;
          font-size: 18px;
        }
        // 表
        .table-wrap {
          padding: 40px 50px;
          .th {
            font-weight: 700;
            padding-bottom: 15px;
          }
          .td {
            height: 50px;
          }
          .item1,
          .item3 {
            width: 80px;
          }
        }
      }
    }
    // 饼状和柱状
    .pie-bar-wrap {
      margin-top: 20px;
      .pie-wrap {
        height: 378px;
        background: #fff;
        margin-right: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .bar-wrap {
        height: 378px;
        background: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>