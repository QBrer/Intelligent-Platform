<template>
    <div class="time">
      {{ currentTime }}
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentTime: ''
      }
    },
    mounted() {
      this.updateTime()
    },
    methods: {
      updateTime() {
        setInterval(() => {
          const dt = new Date()
          const y = dt.getFullYear()
          const mt = dt.getMonth() + 1
          const day = dt.getDate()
          const h = dt.getHours()
          const m = dt.getMinutes()
          const s = dt.getSeconds()
          this.currentTime = `${y}/${mt}/${day} ${h}:${m}:${s}`
        }, 1000)
      }
    }
  }
  </script>
  
  <style>
  /* 样式可以在这里定义 */
  </style>
  