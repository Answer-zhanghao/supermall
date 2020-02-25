<template>
  <div class="home">
    <navbar>
      <div slot="center">购物街</div>
    </navbar>
    <home-swiper :banners="banners"></home-swiper>
    <home-rounding :recommends="recommends"></home-rounding>
    <feture-view></feture-view>
    <tab-control :tabitem="['流行','新款','精选']" @TabClick='TabClick' ></tab-control>
    <goods-list :goods="goodslist"></goods-list>
  </div>
</template>

<script>
import navbar from "components/common/navbar/NavBar";
import HomeSwiper from "views/home/childrenComponents/HomeSwiper";
import HomeRounding from "views/home/childrenComponents/HomeRoundImg";
import FetureView from "views/home/childrenComponents/FetureView";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import { getHomeMultidata, getHomeData } from "../../network/home";

export default {
  name: "Home",
  components: {
    navbar,
    HomeSwiper,
    HomeRounding,
    FetureView,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      IndexClass: "pop"
    };
  },
  computed: {
    goodslist(){
      return this.goods[this.IndexClass].list
    }
  },
  created() {
    // 请求多个数据
    this.getHomeMultidata();
    //  请求商品数据
    this.getHomeData("pop");
    this.getHomeData("news");
    this.getHomeData("sell");
  },
  methods: {
    TabClick(index) {
      switch (index) {
        case 0:
          this.IndexClass = "pop";
          break;
        case 1:
          this.IndexClass = "news";
          break;
        case 2:
          this.IndexClass = "sell";
          break;
      }
    },
    /**
      网络请求相关代码
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeData(type) {
      const page = this.goods[type].page + 1;
      getHomeData(type, page).then(res => {
        console.log(res)
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    }
  }
};
</script>

<style>
.nav-bar {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>
