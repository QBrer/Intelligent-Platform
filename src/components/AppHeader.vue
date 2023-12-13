<template>
    <div class="head clearfix">
      <h1 class="pulll_left">{{ title }}</h1>
      <!-- 放置你的导航菜单 -->
      <Clock></Clock>
    </div>
  </template>
  
  <script>
  import Clock from './Clock.vue'
  
  export default {
    props: ['title'],
    components: {
      Clock
    }
  }
  </script>
  
  <style>
  /* 样式可以在这里定义 */
  </style>
  