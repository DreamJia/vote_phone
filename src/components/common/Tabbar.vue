<template>
  <section>
    <van-tabbar v-model="defaultActive" active-color="#f39809">
      <van-tabbar-item icon="wap-home" to="/home/index">首页</van-tabbar-item>
      <van-tabbar-item icon="notes-o" to="/home/activity">活动详情</van-tabbar-item>
      <van-tabbar-item icon="like-o" to="/home/vote">投票记录</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/home/mine">个人中心</van-tabbar-item>
    </van-tabbar>
  </section>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  computed: {
    defaultActive: function() {
      let pd = this.$route.path.split("/")[2];
      switch (pd) {
        case "index":
          return 0;
          break;
        case "activity":
          return 1;
          break;
        case "vote":
          return 2;
          break;
        case "mine":
          return 3;
          break;
        default:
          break;
      }
    }
  }
};
</script>

