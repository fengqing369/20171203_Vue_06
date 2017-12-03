<template>
    <div>
            <button @click="send">发请求</button>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        methods:{
            send(){
                this.$axios.get('users',{
                    //单个响应设置
                    // transformResponse:function(str){
                    //     let users = JSON.parse(str);
                    //     users.forEach( ele => ele.flag = true);
                    //     return users;
                    // }
                })
                .then(res=>{
                    console.log(res.data);
                })
                .catch(err=>{
                    console.log(err);
                })
            }
        }
    }
</script>
<style>
    
</style>