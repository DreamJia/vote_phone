<template>
  <section>
    <h1>登陆组件</h1>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    let u = document.URL.split("?token=")[1];
    sessionStorage.setItem("token", u);
    this.$router.push("/home");
  }
};
</script>
