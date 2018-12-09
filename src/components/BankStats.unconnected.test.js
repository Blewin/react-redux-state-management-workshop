import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from "react-redux";

import ConnectedBankStats, { BankStats } from './BankStats';
import { store } from '../store';

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

    beforeEach(() => {
      openNewAccount = jest.fn();

      testRenderer = TestRenderer.create(
        <BankStats openNewAccount={openNewAccount} />,
      );

      instance = testRenderer.root;
    });

    it('should contain a button with class new-account-button', () => {
      expect(getCreateAccountButton()).toBeDefined();
    });

    it('should call the openNewAccount callback when clicking the minus button', () => {
      const openNewAccountButton = getCreateAccountButton();

      openNewAccountButton.props.onClick();

      expect(openNewAccount).toHaveBeenCalled();
    });
  })
});
