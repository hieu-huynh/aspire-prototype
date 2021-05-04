<template>
  <q-layout :small="this.$q.screen.lt.md" view="lHh Lpr lFf">
    <the-header />

    <the-sidebar />

    <the-footer />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import TheSidebar from './layouts/TheSidebar.vue';
import TheHeader from './layouts/TheHeader.vue';
import TheFooter from './layouts/TheFooter.vue';
export default {
  name: 'LayoutDefault',
  components: { TheFooter, TheHeader, TheSidebar },
};
</script>

<style lang="scss" scoped>
.q-layout[small] {
  background-color: #0c365a;
}
</style>
