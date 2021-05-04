import Vue from 'vue';
import App from './App.vue';
import './plugins/quasar';
import './plugins/vuelidate';

Vue.config.productionTip = false;

import router from './router';
import store from './store';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
