<template>
  <div id="tabcon">
      <div class='tabcon-item' v-for="(item,index) in tabitem" :class="{active1:index===isActivite}" >
    <span>{{ item }}</span></div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    tabitem: {
      type: Array,
      defalut() {
        return [];
      }
    }
  },
  data() {
    return { isActivite: 0 };
  }
};
</script>

<style>
#tabcon {
  display: flex;
  text-align: center;
  font-size: 15px;
  margin-top: 20px;
}
.tabcon-item {
  flex: 1;
  padding: 10px;

  display: block;
  border-bottom: 1px solid pink;
}
.active1 {
  color: var(--color-high-text);
 
}
.active1 span{
 border-bottom: 3px solid var(--color-tint);
}
</style>
