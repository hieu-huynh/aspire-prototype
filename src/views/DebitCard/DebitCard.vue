<template>
  <page-container heading="Debit Card">
    <template #content="{ isMobile }">
      <div :small="isMobile" class="debit-card">
        <card-info />

        <card-manage />

        <div v-if="isMobile" class="mask"></div>
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

  margin: 40px 0 0 0;
  padding: 40px;

  border-radius: 8px;

  box-shadow: 0 3px 16px #00000014;

  &[small] {
    gap: 34px;
    grid-template-columns: auto;
    grid-auto-flow: row;
    margin: 24px 0 0 0;
    padding: 24px;

    box-shadow: none;
    border-radius: 24px 24px 0 0;

    background-color: transparent;
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
