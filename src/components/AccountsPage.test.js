import React from 'react';
import TestRenderer from 'react-test-renderer';

import AccountsPage from './AccountsPage';
import AccountsContext from '../accounts-context';

describe('AccountsPage', () => {
  /**
   * @type {TestRenderer.ReactTestRenderer}
   */
  let testRenderer;
  /**
   * @type {TestRenderer.ReactTestInstance}
   */
  let instance;

  /**
   * @type {jest.Mock}
   */
  let openNewAccount;
  /**
   * @type {jest.Mock}
   */
  let incrementBalance;
  /**
   * @type {jest.Mock}
   */
  let decrementBalance;

  beforeEach(() => {
    openNewAccount = jest.fn();
    incrementBalance = jest.fn();
    decrementBalance = jest.fn();

    testRenderer = TestRenderer.create(
      <AccountsContext.Provider
        value={{
          balances: [0],
          openNewAccount,
          incrementBalance,
          decrementBalance,
        }}
      >
        <AccountsPage />
      </AccountsContext.Provider>,
    );
    instance = testRenderer.root;
  });

  it('renders without crashing', () => {
    expect(instance).toBeDefined();
  });
});
