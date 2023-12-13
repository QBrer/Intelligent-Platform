import Vue from 'vue';
import VueBMap from 'vue-bmap-gl';
import 'vue-bmap-gl/dist/style.css'
// import { BMapManager } from 'vue-bmap-gl';
import App from './App.vue';
// Vue.use(BMapManager);
Vue.use(VueBMap);
VueBMap.initBMapApiLoader({
  ak: 'xfvo4MjWC2PlBasfoccreOYz382MamBu',
  // 默认百度 sdk 版本为 1.0
  v: '3.0'
});
// BMapManager.initBMapApiLoader({
//   ak: 'xfvo4MjWC2PlBasfoccreOYz382MamBu',
//   // 默认百度 sdk 版本为 1.0
//   v: '3.0'
// });
new Vue({
  el: '#app',
  render: h => h(App)
})