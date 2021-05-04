<template>
  <q-page :small="isMobile" class="page-container">
    <h1 class="text-h5 text-bold">
      {{ heading }}
    </h1>

    <slot name="content" :is-mobile="isMobile">
      <div :small="isMobile" class="page-content">
        <slot />
      </div>
    </slot>
  </q-page>
</template>

<script>
export default {
  props: {
    heading: { type: String, default: '' },
  },
  computed: {
    isMobile() {
      return this.$q.screen.lt.md;
    },
  },
};
</script>

<style lang="scss" scoped>
.page-container {
  padding: 60px;

  &[small] {
    padding: 0;

    h1 {
      padding: 0 24px;
      color: white;
    }
  }
}

.page-content {
  margin: 40px 0 0 0;
  padding: 40px;

  border-radius: 8px;

  box-shadow: 0 3px 16px #00000014;

  &[small] {
    margin: 24px 0 0 0;
    padding: 24px;
    box-shadow: none;
    background-color: white;
    border-radius: 24px 24px 0 0;
  }
}
</style>
