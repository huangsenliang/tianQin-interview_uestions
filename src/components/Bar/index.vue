<template>
  <div class="bar" ref="myBar"></div>
</template>

<script>
export default {
  name: "Bar",
  props:{
    xAxis:{
      type:Array,
      default:[]
    },
    series:{
      type:Array,
      default:[]
    }
  },
  data() {
    return {};
  },
  methods: {
    // 绘制
    drawLine() {
      let myBar = this.$refs.myBar;
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(myBar);
      // 绘制图表
      myChart.setOption({
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        // 标题
        title: {
          show: true,
          text: "柱状数据展示",
          left: "center",
          top: "25px",
          textStyle: {
            fontFamily: "Arial, Verdana",
            fontSize: 20,
            fontWeight: "normal",
            color: "#000"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          top: "25%",
          // bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: this.xAxis,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "40%",
            data: this.series
          }
        ]
      });
    }
  },
  watch: {
    xAxis() {
      this.drawLine();
    },
    series() {
      this.drawLine();
    }
  },
  mounted() {
    this.drawLine();
  }
};
</script>

<style lang="less" scoped>
.bar {
  width: 100%;
  height: 100%;
}
</style>