<template>
    <li>

        <a href="">2222</a>

        <slot></slot>

       <!--<div>
                <div>
                    <a href="">111111</a>
                </div>
            </div>    -->


    </li>
</template>
<script>
    export default {
        name:'my-li',
        data(){
            return {

            }
        }
    }
</script>
<style scoped>
    /*最后一个儿子，可以管理所有*/
    a{
        text-decoration: none;
    }
</style>