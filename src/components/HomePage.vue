<template>
    <div id="app">
      <div class="main">
          <div class="content">
              <BaiduMap />
              <CenterBox />
              <LeftBox />
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import CenterBox from './CenterBox.vue';
  import LeftBox from './LeftBox.vue'
  import BaiduMap from './BaiduMap.vue';
  export default {
    components: {
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

  </style>