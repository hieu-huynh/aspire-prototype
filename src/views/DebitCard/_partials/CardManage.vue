<template>
  <div class="card-manage">
    <div v-for="(control, i) in controls" :key="i" :small="isMobile" class="card-control">
      <img :src="require(`@/assets/icons/${control.icon}.svg`)" />

      <div class="control-details">
        <p class="text-body1 text-weight-medium text-blue-9">{{ control.title }}</p>
        <p class="text-subtitle2 text-grey-4 text-weight-regular">{{ control.desc }}</p>
      </div>

      <div class="control-action">
        <q-toggle v-if="control.switchable" v-model="isFreezeCard" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFreezeCard: false,
      controls: [
        {
          icon: 'freeze-card',
          title: 'Freeze card',
          desc: 'Your debit card is currently active',
          switchable: true,
        },
        {
          icon: 'speed-gauge',
          title: 'Spending limit',
          desc: 'Set a weekly spending amount',
        },
        {
          icon: 'new-card',
          title: 'Get a new card',
          desc: 'This deactivates your current debit card',
        },
        {
          icon: 'deactivated-card',
          title: 'Deactivated cards',
          desc: 'Your previously deactivated cards',
        },
      ],
    };
  },
  computed: {
    isMobile() {
      return this.$q.screen.lt.md;
    },
  },
};
</script>

<style lang="scss" scoped>
.card-manage {
  z-index: 3;
}
.card-control {
  display: grid;
  gap: 16px;
  grid-template-columns: minmax(0, 36px) minmax(0, 1fr) minmax(0, 40px);
  align-items: center;

  padding: 32px 0;

  $border-value: 1px solid #f1f1f1;
  border-top: $border-value;

  &:first-child {
    border-top: none;
  }

  &[small] {
    padding: 16px 0;
    border-top: none;
  }
}
</style>
