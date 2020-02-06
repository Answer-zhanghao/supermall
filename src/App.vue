<template>
  <div id="app">
    <router-view></router-view>
    <tabbarview>
      <MainTabBar></MainTabBar>
     
    </tabbarview>

    <!-- <router-view /> -->
  </div>
</template>

<script>
import tabbarview from "components/tabbar/tabbarview";
  import MainTabBar from 'components/content/tabbar/MainTabBar'
export default {
  name: "App",
  components: {
    tabbarview,
    MainTabBar
  }
};
</script>

<style>
@import 'assets/css/base.css';
</style>
