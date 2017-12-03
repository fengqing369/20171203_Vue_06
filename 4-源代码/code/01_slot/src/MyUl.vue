<template>
    <ul>
        <slot></slot>
    </ul>
</template>
<script>
    export default {
        name:'my-ul',
        data(){
            return {

            }
        }
    }
</script>
<style scoped>
/*li是ul组件儿子的根节点*/
    li{
        list-style: none;
    }
    /*a标签是儿子的儿子,无效*/
    a{
        text-decoration: none;
    }
</style>