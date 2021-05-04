import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuelidate from 'vuelidate';
import sinon from 'sinon';
import MortgageForm from '@/views/MortgageForm.vue';
import { QInput } from 'quasar';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Vuelidate);

describe('MortgageForm.vue', () => {
  let wrapper;
  let amountInputEl;
  let formEl;

  const amount = 500000;

  const mortgageStore = {
    namespaced: true,
    actions: {
      applyForALoan: sinon.spy(),
    },
  };

  const applyForALoanAction = mortgageStore.actions.applyForALoan;

  const store = new Vuex.Store({
    modules: {
      mortgage: mortgageStore,
    },
  });

  const shallowMountFn = (options = {}) => {
    return shallowMount(MortgageForm, {
      localVue,
      store,
      sync: false,
      ...options,
    });
  };

  beforeEach(() => {
    wrapper = shallowMountFn();

    formEl = wrapper.find('form');
    amountInputEl = wrapper.findComponent(QInput);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it(`Should only allow to submit if user entered a valid amount`, async () => {
    expect(wrapper.vm.submitDisabled).toBeTruthy();

    amountInputEl.vm.$emit('input', amount);

    expect(wrapper.vm.$data.model.amount).toBe(amount);

    expect(wrapper.vm.submitDisabled).toBeFalsy();
  });

  it(`Should dispatch "applyForALoan" action when submit form`, async () => {
    const methodFn = sinon.spy(wrapper.vm, 'handleBorrowing');

    amountInputEl.vm.$emit('input', amount);

    formEl.trigger('submit');

    await wrapper.vm.$nextTick();

    expect(methodFn.called).toBeTruthy();

    expect(
      applyForALoanAction.calledWith(sinon.match.any, {
        amount: amount,
        tenor: wrapper.vm.$data.model.tenor,
      })
    ).toBeTruthy();
  });
});
