<template>
    <div class="nav_btn">
        <div class="btn_left">
            <a @click="goTo('/')">
                <div class="btn_list listActive">系统首页</div>
            </a>
            <a @click="goTo('/WaterArea')">
                <div class="btn_list">积水地带</div>
            </a>
            <a @click="goTo('./EmergencyRescue')">
                <div class="btn_list">应急抢险</div>
            </a>
            <a @click="goTo('./DynamicEmulation')">
                <div class="btn_list">动态仿真</div>
            </a>
        </div>
        <div class="btn_right">
        </div>
    </div>
</template>

<script>
export default {
  methods: {
  goTo(route) {
    if (this.$route.path !== route) {
      this.$router.push(route);
    }
  }
}
};
</script>  
  
<style>

</style>
  