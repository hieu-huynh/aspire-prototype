import Vue from 'vue';
import Vuex from 'vuex';

import mortgageStore from './mortgage';

Vue.use(Vuex);

const state = () => ({});

const modules = {
  mortgage: mortgageStore,
};

const store = new Vuex.Store({
  state,
  modules,
});

export default store;
