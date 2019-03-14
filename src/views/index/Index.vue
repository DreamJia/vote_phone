<template>
  <section>
    <div class="index-box" v-if="pathLen===3">
      <Loading v-show="LOADING"/>
      <h2>{{actData.activity_name}}</h2>
      <div class="act-date">
        <van-icon name="clock" color="#999"/>
        <span>{{actData.start_time}}&nbsp;至&nbsp;{{actData.end_time}}</span>
      </div>
      <img :src="actData.activity_backimg" style="width:100%;height:auto;margin-bottom:1.5rem;" alt>
      <p class="act-content">{{actData.activity_contents}}</p>
      <van-button @click="joinClick()" size="large" type="danger">参加活动</van-button>
    </div>
    <router-view v-if="pathLen===4"/>
  </section>
</template>
<script>
import { mapState } from "vuex";
import { Index_init } from "@api";
import Loading from "@cp/Loading";
export default {
  data() {
    return {
      loading: false,
      actStatus: true,
      actData: {}
    };
  },
  computed: {
    pathLen: function() {
      let l = this.$route.path.split("/").length;
      return l;
    },
    ...mapState(["LOADING"])
  },
  components: {
    Loading
  },
  methods: {
    pageInit() {
      Index_init().then(res => {
        if (res.status) {
          console.log(res);
          this.actStatus = res.actStatus;
          this.actData = res.data;
        }
      });
    },
    joinClick() {
      this.isJoin = true;
      this.$router.push({
        path: "/home/index/join"
      });
    }
  },
  created() {
    this.pageInit();
  }
};
</script>
<style lang="scss" scoped>
.index-box {
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 100px;
  h2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-bottom: 0.6rem;
  }
  .act-date {
    height: 1.25rem;
    margin-bottom: 1rem;
    i {
      vertical-align: top;
      margin-right: 0.5rem;
    }
    span {
      display: inline-block;
      font-size: 0.9rem;
      line-height: 1.25rem;
      vertical-align: top;
      color: #999;
    }
  }
  .act-content {
    font-size: 0.8rem;
    line-height: 1.25rem;
    margin-bottom: 1rem;
  }
}
</style>


