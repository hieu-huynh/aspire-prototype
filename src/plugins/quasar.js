import Vue from 'vue';

import '../styles/quasar.scss';
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css';
import { Quasar, Notify } from 'quasar';

Vue.use(Quasar, {
  plugins: {
    Notify,
  },
  config: {
    notify: {
      /* look at QUASARCONFOPTIONS from the API card (bottom of page) */
    },
  },
});
