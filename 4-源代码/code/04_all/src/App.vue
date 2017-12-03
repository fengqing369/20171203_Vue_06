<template>
    <div>
            <button @click="send">发请求1</button>
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
                //省、市信息动态获取，两者都成功才行
                // this.$axios.all([
                //     this.$axios.get('users'),
                //     this.$axios.get('users/1')
                // ])
                // //两者都成功
                // .then( this.$axios.spread( 
                //         (allUserRes,userRes)=>{
                //             console.log(allUserRes.data);
                //             console.log(userRes.data);
                //         })  
                // )
                // .catch(err=>{
                //     //至少一个请求失败
                //     console.log(err);
                // })
                
                //保证顺序，并为每一个请求处理成功后的响应
                this.$axios.get('users')
                .then(res=>{
                     console.log('第一个请求成功了');
                     //成功后的回调函数
                     return this.$axios.get('users/1')
                })
                .then(res=>{
                     console.log('第二个请求成功了');
                     return this.$axios.get('users')
                     
                })
                .then(res=>{
                    console.log('第三个请求成功了');
                })
                .catch(err=>{
                    console.log('请求失败了');
                })

            }
        }
    }
</script>
<style>
    
</style>