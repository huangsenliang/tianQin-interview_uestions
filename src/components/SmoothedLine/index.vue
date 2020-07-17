<template>
  <!-- 折线数据展示 -->
  <div class="smoothed-line">
    <div class="smoothed-wrap" ref="smoothedLine"></div>
  </div>
</template>

<script>
export default {
  name: "SmoothedLine",
  props: {
    xAxis: {
      type: Array,
      default: []
    },
    series: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  methods: {
    // 绘制
    drawLine() {
      let smoothedLine = this.$refs.smoothedLine;
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(smoothedLine);
      // 绘制图表
      myChart.setOption({
        title: {
          text: "曲线数据展示",
          left: "center",
          top: "20px"
        },
        xAxis: {
          type: "category",
          data: this.xAxis
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: this.series,
            type: "line",
            smooth: true,
            // 显示数值
            itemStyle: { normal: { label: { show: true } } }
          }
        ]
      });
    }
  },
  mounted() {
    this.drawLine();
  },
  watch: {
    series() {
      this.drawLine();
    },
    xAxis() {
      this.drawLine();
    }
  }
};
</script>

<style lang="less" scoped>
.smoothed-line {
  .smoothed-wrap {
    margin-top: 20px;
    height: 450px;
    width: 100%;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
}
</style>