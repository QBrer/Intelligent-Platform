import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'
import WaterArea from '../components/WaterArea.vue'
import EmergencyRescue from '../components/EmergencyRescue.vue'
import DynamicEmulation from '../components/DynamicEmulation.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomePage },
  { path: '/WaterArea', component: WaterArea },
  { path: '/EmergencyRescue', component: EmergencyRescue },
  { path: '/DynamicEmulation', component: DynamicEmulation },
]

const router = new VueRouter({
  routes,
})

export default router