<template>
    <div>
            <input type="file" name=""  @change="fileChange">
            当前上传进度为:
                {{rate}}%....
            <button @click="send">发请求</button>
            <button @click="cancel">取消请求</button>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                file:{},//上传文件
                rate:'',//上传显示
                source:{}, //保存令牌机
            }
        },
        methods:{
            cancel(){
                //取消的时候通过令牌取消
                //用令牌取消
                this.source.cancel();
            },
            send(){

                //发起请求的时候，给一个令牌
                let CancelToken = this.$axios.CancelToken; //生产令牌的工厂
                this.source = CancelToken.source(); //生产令牌机

                //上传文件前的准备
                let fd = new FormData();
                fd.append('file',this.file);

                //将装载数据的篮子通过ajax发送到服务器
                this.$axios.post('http://localhost:8888',fd,{
                    //放入令牌
                     cancelToken: this.source.token,
                     onUploadProgress: progressEvent => {
                         this.rate = Math.trunc(progressEvent.loaded / progressEvent.total * 100)
                      },
                })
                .then(res=>{
                    console.log(res);
                })
                .catch( err=>{
                    console.log(err);
                })
            },
            fileChange(e){
                this.file = e.target.files[0];
                
            }
        }
    }
</script>
<style>
    
</style>