<template>
  <div class="product-detail">
    <a-steps :current="current" class="product-steps">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">
      <basic-info v-if="current === 0" @next="next"/>
      <sale-info v-else-if="current === 1" />
    </div>
  </div>
</template>

<script>
import BasicInfo from '@/components/basicDetail.vue';
import SaleInfo from '@/components/saleDetail.vue';

export default {
  data() {
    return {
      current: 0,
      steps: [
        {
          title: '填写商品基本信息',
        },
        {
          title: '填写商品销售信息',
        },
      ],
    };
  },
  components: {
    BasicInfo,
    SaleInfo,
  },
  methods: {
    next(form) {
      this.current += 1;
      console.log(form);
    },
    prev() {
      this.current -= 1;
    },
  },
};
</script>
<style lang="less" scoped>
.product-detail {
    .product-steps {
        width: 50%;
        margin: 20px auto;
    }
  .steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  .steps-action {
    margin-top: 24px;
  }
}
</style>
