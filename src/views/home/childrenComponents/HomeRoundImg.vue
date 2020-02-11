<template>
  <div id="RoundImg">
    <div v-for="item in recommends" class="Roundchild">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <div class="Roundfont">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRoundImg",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
#RoundImg {
  display: flex;
  text-align: center;
  margin-top: 10px;
  font-size: 15px;
  border-bottom: 8px solid #eee;
}
.Roundfont {
  margin-top: 3px;
  margin-bottom: 20px;
}
.Roundchild {
  flex: 1;
}
.Roundchild img {
  width: 80px;
}
</style>
