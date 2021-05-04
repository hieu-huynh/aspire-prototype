import $router from '@/router';
import { addWeeks } from 'date-fns';

const initialState = {
  amount: 23424,
  tenor: 3,
};

const mutations = {
  setLoanInfo: (state, payload) => {
    state.amount = payload.amount;
    state.tenor = payload.tenor;
  },
};

const actions = {
  applyForALoan: ({ commit }, payload) => {
    commit('setLoanInfo', payload);

    $router.push({ name: 'payments' });
  },
  getRepaymentList: ({ state }) => {
    const { tenor, amount } = state;

    const tenorInWeeks = (52 * tenor) / 12;

    const weeklyPrincipal = amount / tenorInWeeks;

    return Array.from({ length: tenorInWeeks }).map((w, i) => ({
      period: i + 1,
      amount: weeklyPrincipal,
      dueDate: addWeeks(new Date(), i + 1),
    }));
  },
};

export default {
  namespaced: true,
  state: { ...initialState },
  mutations,
  actions,
};
