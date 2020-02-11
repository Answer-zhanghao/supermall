<template>
  <div class="home">
    <navbar>
      <div slot="center">购物街</div>
    </navbar>
    <home-swiper :banners='banners'></home-swiper>
    <home-rounding :recommends='recommends'></home-rounding>
  </div>
</template>

<script>
import navbar from "components/common/navbar/NavBar";
import HomeSwiper from "views/home/childrenComponents/HomeSwiper";
import HomeRounding from 'views/home/childrenComponents/HomeRoundImg'
import { getHomeMultidata } from "../../network/home";

export default {
  name: "Home",
  components: {
    navbar,
    HomeSwiper,
    HomeRounding
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

<style></style>
