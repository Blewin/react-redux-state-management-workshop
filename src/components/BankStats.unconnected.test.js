import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from "react-redux";

import ConnectedBankStats, { BankStats } from './BankStats';
import { store } from '../store';

import { emptyBalances, simpleBalances } from '../mocks/balance';

describe('BankStats', () => {
  describe('connected ', () => {
    it('renders without crashing', () => {
      const testRenderer = TestRenderer.create(
        <Provider store={store}>
          <ConnectedBankStats />
        </Provider>
      );

      expect(testRenderer.root).toBeDefined();
    });
  });

  describe('unconnected', () => {
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

    function getCreateAccountButton() {
      return instance.find(
        (node) => node.type === 'button' && node.props.className === 'new-account-button',
      );
    }

    function getAccountsIndicator() {
      return instance.find((node) => node.props.className === 'all-accounts-counter');
    }

    describe('bank stats with simple balances', () => {
      beforeEach(() => {
        openNewAccount = jest.fn();

        testRenderer = TestRenderer.create(
          <BankStats openNewAccount={openNewAccount} balances={simpleBalances}/>,
        );

        instance = testRenderer.root;
      });

      describe('new-account button', () => {
        it('should have class new-account-button', () => {
          expect(getCreateAccountButton()).toBeDefined();
        });

        it('should call the openNewAccount callback when clicking', () => {
          const openNewAccountButton = getCreateAccountButton();

          openNewAccountButton.props.onClick();

          expect(openNewAccount).toHaveBeenCalled();
        });
      });

      describe('accounts indicator', () => {
        it('should have class all-accounts-counter', () => {
          expect(getAccountsIndicator()).toBeDefined();
        });

        it('should display correct number of elements', () => {
          expect(getAccountsIndicator().props.children.join('')).toEqual('3 accounts open.');
        });

      })
    });

    describe('bank stats with empty balances', () => {
      beforeEach(() => {
        openNewAccount = jest.fn();

        testRenderer = TestRenderer.create(
          <BankStats openNewAccount={openNewAccount} balances={emptyBalances}/>,
        );

        instance = testRenderer.root;
      });

      describe('accounts indicator', () => {
        it('should have class all-accounts-counter', () => {
          expect(getAccountsIndicator()).toBeDefined();
        });

        it('should display correct number of elements', () => {
          expect(getAccountsIndicator().props.children.join('')).toEqual('0 accounts open.');
        });

      })
    });

  })
});
