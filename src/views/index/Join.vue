<template>
  <section>
    <div class="upload-box">
      <van-uploader v-if="!formData.workUrl" :after-read="onRead" class="camera">
        <!-- <van-icon name="photograph" color="#ccc"/> -->
        <img :src="cameraUrl" ref="pic" alt>
        <span>点击选择图片</span>
      </van-uploader>
    </div>
    <form :action="upUrl" method="post" name="voteWorks" :header="upToken">
      <van-cell-group>
        <van-cell-group>
          <van-field v-model="formData.username" required clearable label="姓名" placeholder="请输入姓名"/>
          <van-field v-model="formData.phone" label="手机号" placeholder="请输入手机号" required/>
        </van-cell-group>
      </van-cell-group>
    </form>
    <div style="height:5rem;"></div>

    <van-button size="large" type="danger">确认参加</van-button>
  </section>
</template>
<script>
import { Pic_upload } from "@api";
export default {
  data() {
    return {
      formData: {
        worksUrl: "",
        username: "",
        phone: ""
      },
      cameraUrl: require("@/assets/camera.svg"),
      upToken: {
        Authorization: ""
      },
      upUrl:
        "http://testweb.weixin101.com/global_vote/home/activity/uploadWorks"
    };
  },
  methods: {
    pageInit() {
      const token = sessionStorage.getItem("token");
      this.upToken.Authorization = token;
    },
    onRead(file) {
      // console.log(file);
      let fd = new FormData();
      fd.append("voteWorks", file.file);
      // console.log(fd.get("voteWorks"));
      Pic_upload(fd).then(res => {
        console.log(res);
      });
    }
  },
  created() {
    this.pageInit();
  }
};
</script>
<style lang="scss" scoped>
.upload-box {
  width: 100%;
  height: 15rem;
  border: 2px dashed #ccc;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  .camera {
    width: 10rem;
    height: 10rem;
    margin: 0 auto;
  }
  span {
    display: inline-block;
    width: 10rem;
    text-align: center;
    color: #ccc;
  }
  img {
    width: 10rem;
    height: 10rem;
  }
}
</style>

