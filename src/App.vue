<template>
  <div id="app">
    <div class="main">
        <div class="nav">城市洪涝灾害预警平台</div>
        <NavButton />
        <div class="content">
            <BaiduMap />
            <CenterBox />
            <LeftBox />
        </div>
    </div>
  </div>
</template>

<script>
import NavButton from './components/NavButton.vue';
import CenterBox from './components/CenterBox.vue';
import LeftBox from './components/LeftBox.vue'
import BaiduMap from './components/BaiduMap.vue';
export default {
  components: {
    NavButton,
    CenterBox,
    LeftBox,
    BaiduMap
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style>
@import url('./css/circulationSales.css');
@import url('./css/index.css');
@import url('./css/land_flow.css');
@import url('./css/new_index.css');
@import url('./css/production.css');
@import url('./css/production_testing.css');
@import url('./css/reset.css');
@import url('./css/css.css');

.bmap-wrapper {
    position: relative;
    width: 100%;
    height: 900px; /* 不明白为什么，这个必须为确定值 */
}

.centerBox{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.leftBox {
  position: absolute;
  top: 0;
  right: 0;
  width: 22%;
}

.centerBox,
.leftBox {
  z-index: 2;/* 设置 centerBox 和 leftBox 的 z-index，确保在地图上方 */
}
</style>