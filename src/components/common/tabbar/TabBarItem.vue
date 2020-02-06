<template>
  <div class="tab-bar-item" @click="homeClick">
    <div v-if="!isActivite">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{ active: isActivite }" :style='isActiveStyle'>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TagBarItem",

  props: {
    path: String,
    textColor:{
        type:String,
        default:'salmon'
    }
  },
  computed: {
    isActivite() {
      return this.$route.path.indexOf(this.path) !== -1;
    }
    ,
    isActiveStyle(){
        return this.isActivite?{color:this.textColor}:{}
    }
  },
  methods: {
    homeClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  box-shadow: 0px -1px 1px rgba(49, 13, 13, 0.1);
}
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
}
.tab-bar-item img {
  width: 25px;
  height: 25px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

</style>
