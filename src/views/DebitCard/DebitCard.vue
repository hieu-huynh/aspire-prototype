<template>
  <page-container heading="Debit Card">
    <template #content="{ isMobile }">
      <div :small="isMobile" class="debit-card">
        <card-info />

        <card-manage />

        <div class="mask"></div>
      </div>
    </template>
  </page-container>
</template>
<script>
import PageContainer from '@/layouts/-components/PageContainer.vue';
import CardInfo from './_partials/CardInfo.vue';
import CardManage from './_partials/CardManage.vue';

export default {
  components: { CardManage, CardInfo, PageContainer },
};
</script>

<style lang="scss" scoped>
.debit-card {
  display: grid;
  gap: 80px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;

  &[small] {
    gap: 34px;
    grid-template-columns: auto;
    grid-auto-flow: row;
    margin-top: 24px;
    padding: 24px;
  }
}

.mask {
  position: absolute;
  bottom: 0;
  left: 0;

  z-index: 2;

  width: 100%;
  height: 68%;

  background-color: white;
  border-radius: 24px 24px 0 0;
}
</style>
