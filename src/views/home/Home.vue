<template>
  <div class="home">
    <navbar>
      <div slot="center">购物街</div>
    </navbar>
    <home-swiper :banners='banners'></home-swiper>
    <home-rounding :recommends='recommends'></home-rounding>
    <feture-view></feture-view>
    <tab-control :tabitem="['流行','新款','精选']"></tab-control>
  </div>
</template>

<script>
import navbar from "components/common/navbar/NavBar";
import HomeSwiper from "views/home/childrenComponents/HomeSwiper";
import HomeRounding from 'views/home/childrenComponents/HomeRoundImg'
import FetureView from 'views/home/childrenComponents/FetureView'
import TabControl from 'components/content/tabControl/TabControl'
import { getHomeMultidata } from "../../network/home";

export default {
  name: "Home",
  components: {
    navbar,
    HomeSwiper,
    HomeRounding,
    FetureView,
    TabControl
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  }
};
</script>

<style>
  .nav-bar{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    
  }
</style>
