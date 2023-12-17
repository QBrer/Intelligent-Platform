import Vue from 'vue';
import VueBMap from 'vue-bmap-gl';
import 'vue-bmap-gl/dist/style.css'
import App from './App.vue';
import router from './route/route.js';
Vue.use(router)
Vue.use(VueBMap);

VueBMap.initBMapApiLoader({
  ak: 'xfvo4MjWC2PlBasfoccreOYz382MamBu',
  v: '3.0'
});


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')