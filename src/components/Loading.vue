<template>
  <section class="loading">
    <van-loading class="loading-icon"/>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 121;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  .loading-icon {
    width: 1rem;
    height: 1rem;
    margin: 7.5rem auto;
  }
}
</style>



