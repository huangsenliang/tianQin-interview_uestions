import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 全局样式文件
import "./styles/normalize.css";
import "./styles/common.css";
import "../public/icon/iconfont.css";

// echart
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
