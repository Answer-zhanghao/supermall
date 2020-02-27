<template>
  <div class="Wrapper" ref="aaa">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.aaa, {
      //在better-scroll中，click属性是不起作用的
      click: true,
      bounce: false,
      scrollbar: true,
      preventDefault: false,
      tap: true,
      mouseWheel: true
      
 



    });
    this.scroll.scrollTo(0,0)
  },
  methods:{
      scrollTo(x,y,time=500){
          this.scroll.scrollTo(x,y,time)
      }
  }
};
</script>

<style>
</style>