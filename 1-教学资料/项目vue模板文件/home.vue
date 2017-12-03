<template>
    <div>
    <ul>
         <li>
            <a href="">
               <div class="back-img">
                   
               </div>
            </a>
        </li>
    </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>
<style scoped>
.back-img{
        background-size: 50px;
        background-repeat: no-repeat;
        background-position: 40px 35px;
        font-size: 20px;
        font-family: 'Microsoft YaHei';
}


 ul{
        overflow: hidden;
    } 
     li{
        float: left;
        height:20%;
        line-height: 218px;   
        width: 33%;
        margin: 1 1 0 0;
        text-align: center; 

        position: relative;
    }
    li a{
        text-decoration: none;
        color:black;
    }
   /* .back-img {
        background-repeat: round;
        height: 60px;
        width: 60px;

        position: absolute;
        left: 50%;
        top: 30px;
        margin-left: -30px;
    }*/
</style>