<template>
    <div class="Wrapper" ref='aaa'>
        <div class="content">
            <slot/>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
    name:'Scroll',
    data(){
        return{
            scroll:null
        }
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.aaa,{
            //在better-scroll中，click属性是不起作用的
            click: true
        })
    }
}
</script>

<style>

</style>