<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style>
.nav-bar {
  display: flex;
  line-height: 44px;
  height: 44px;
  background-color: #ff5766;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1);
  text-align: center;
  z-index: 100;
}

.left,
.right {
  width: 60px;
  /* text-align: center; */
}
.center {
  flex: 1;
  /* text-align: center; */
  line-height: 44px;
  color: white;
}
</style>
