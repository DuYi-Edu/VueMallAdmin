<template>
    <div class="product-list">
        <!-- 搜索 -->
        <search-box @submit="searchSubmit"/>
        <!-- 表格 -->
    </div>
</template>

<script>
import searchBox from '@/components/search.vue';

export default {
  components: {
    searchBox,
  },
  methods: {
    searchSubmit(form) {
      console.log(form);
    },
  },
};
</script>
