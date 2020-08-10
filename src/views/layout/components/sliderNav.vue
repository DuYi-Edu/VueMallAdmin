<template>
  <div class="silder-nav">
    <a-button type="primary" @click="toggleCollapsed">
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item>商品</a-breadcrumb-item>
        <a-breadcrumb-item>
          <a href>商品列表</a>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <ul class="user-info">
      <li class="user-name">
        user-info
        <a-icon type="down" />
      </li>
      <li class="login-out">退出</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('changeCollapsed');
    },
  },
};
</script>
