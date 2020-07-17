<template>
  <div class="pie" ref="myPie"></div>
</template>

<script>

export default {
  name: "Pie",
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
    return {
      arr: []
    };
  },
  methods: {
    // 绘制
    drawLine() {
      this.getArr();
      let myPie = this.$refs.myPie;
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(myPie);
      // 绘制图表
      myChart.setOption({
        // myEchart1数据
        // 标题
        title: {
          show: true,
          text: "饼状数据展示",
          left: "center",
          top: "25px",
          textStyle: {
            fontFamily: "Arial, Verdana",
            fontSize: 20,

            fontWeight: "normal",
            color: "#000"
          }
        },
        // 鼠标悬浮显示数据
        tooltip: {
          trigger: "item",
          formatter: "{a}"
        },

        // 饼状内容
        series: [
          {
            name: "饼状数据展示",
            type: "pie",
            radius: "55%",
            top: "60px",
            label: {
              formatter: "{b}",
              fontSize: 14
            },
            data: this.arr,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    },
    // 得到数组对象
    getArr() {
      this.arr = this.xAxis.map((item, index) => {
        return { name: this.xAxis[index], value: this.series[index] };
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
.pie {
  width: 100%;
  height: 100%;
}
</style>