import {
    fetch,
    post
} from "@/utils/http"

//主页初始化
export const Index_init = () => fetch("home/activity/index");

//作品上传
export const Pic_upload = (data) => post("home/activity/uploadWorks", data);