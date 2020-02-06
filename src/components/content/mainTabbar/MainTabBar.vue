<template>
  <tabbarview>
    <div id="tab-bar">
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/home_active.svg"
          alt=""
        />
        <span slot="item-text">首页</span>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/category_active.svg"
          alt=""
        />
        <span slot="item-text">分类</span>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="" />
        <img
         slot="item-icon-active"
          src="~assets/img/tabbar/shopcart_active.svg"
          alt=""
        />
        <span slot="item-text">购物车</span>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <span slot="item-text">我的</span>
      </tab-bar-item>
    </div>
  </tabbarview>
</template>

<script>
import tabbarview from "components/common/tabbar/tabbarview";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    tabbarview,
    TabBarItem
  }
};
</script>

<style scoped></style>
