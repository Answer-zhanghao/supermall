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
            
        })
    }
}
</script>

<style>

</style>