<template>
  <div class="home">
    <left-menu></left-menu>
    <div :class="{'main-app': true, 'extend-app': $store.state.collapsed}">
      <slider-nav></slider-nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import leftMenu from './components/menu.vue';
import sliderNav from './components/sliderNav.vue';

export default {
  data() {
    return {

    };
  },
  components: {
    leftMenu,
    sliderNav,
  },
  methods: {

  },
};
</script>

<style lang="less">
@import url("../../assets/css/home.less");
</style>
