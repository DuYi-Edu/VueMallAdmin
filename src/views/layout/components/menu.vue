<template>
  <div class="menu-list">
    <a-menu
      :default-selected-keys="[defaultSelectKey]"
      :default-open-keys="[defaultOpenKey]"
      mode="inline"
      theme="dark"
      :inline-collapsed="$store.state.collapsed"
    >
    <template v-for="route in $store.state.menuRoutes">
       <a-sub-menu v-if="!route.meta.hidden" :key="route.name">
          <span slot="title">
          <a-icon :type="route.meta.icon" />
          <span>{{route.meta.title}}</span>
        </span>
        <template  v-for="child in route.children">
            <a-menu-item v-if="!child.meta.hidden"  :key="child.name">
          <router-link :to="{name: child.name}">
            <a-icon :type="child.meta.icon" />
            {{child.meta.title}}
          </router-link>
        </a-menu-item>
        </template>
      </a-sub-menu>
    </template>
    </a-menu>
  </div>
</template>
<script>
export default {
  computed: {
    defaultSelectKey: {
      get() {
        return this.$router.currentRoute.matched[1]
          ? this.$router.currentRoute.matched[1].name
          : '';
      },
    },
    defaultOpenKey: {
      get() {
        return this.$router.currentRoute.matched[0].name;
      },
    },
  },
  watch: {
    $route() {
      console.log(this.$router);
    },
  },
  created() {
    console.log(this.$router);
  },
};
</script>
<style lang="less">
.menu-list {
  width: 200px;
  position: fixed;
  height: 100%;
  .ant-menu {
    height: 100%;
  }
}
</style>
