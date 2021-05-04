import sinon from 'sinon';
import $router from '@/router';
import mortgageStore from '@/store/mortgage';

describe('store/mortgage.js', () => {
  const { actions } = mortgageStore;
  let commit, dispatch;

  let actionFn;

  const routerPushFn = sinon.spy($router, 'push');

  beforeEach(() => {
    commit = sinon.spy();
    dispatch = sinon.spy();
  });

  afterEach(() => {
    commit.resetHistory();
    dispatch.resetHistory();
  });

  // actions

  it(`Should executes loan procedure when call "applyForALoan" action`, async () => {
    actionFn = actions.applyForALoan;

    const payload = {
      amount: 50000,
      tenor: 12,
    };

    await actionFn({ commit, dispatch }, payload);
    expect(commit.withArgs('setLoanInfo', payload).calledOnce).toBeTruthy();
    expect(routerPushFn.calledOnceWith({ name: 'payments' })).toBeTruthy();
  });
});
