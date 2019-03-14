<template>
  <div class="home">
    <div class="main-content">
      <router-view/>
    </div>
    <Tabbar/>
  </div>
</template>

<script>
import Tabbar from "@cp/common/Tabbar";
export default {
  name: "home",
  components: {
    Tabbar
  }
};
</script>
<style lang="scss" scoped>
.main-content {
  width: 100%;
  height: 100vh;
  padding: 0.5rem;
  box-sizing: border-box;
}
</style>

