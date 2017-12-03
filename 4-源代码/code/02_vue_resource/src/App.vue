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
                // this.$http.get('http://localhost:3000/users/1')
                // .then( res=>{
                //     console.log(res.body);
                // })
                // .catch( err=>{
                //     console.log(err);
                // });
                
                //  this.$http.post('http://localhost:3000/users',{
                //     id:10,username:'hehe'
                //  },{
                //     emulateJSON:true
                //  })
                // .then( res=>{
                //     console.log(res.body);
                // })
                // .catch( err=>{
                //     console.log(err);
                // })
                // 
                
                this.$http.jsonp('http://localhost:3000/users')
                .then(res=>{
                    console.log(res.body);
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