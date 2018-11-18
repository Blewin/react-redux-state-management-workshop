import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';

import App from './App';
import Counter from './components/Counter';

describe('App', () => {
  /**
   * @type {TestRenderer.ReactTestRenderer}
   */
  let testRenderer;
  /**
   * @type {TestRenderer.ReactTestInstance}
   */
  let instance;

  beforeEach(() => {
    testRenderer = TestRenderer.create(<App />);
    instance = testRenderer.root;
  });

  function getOpenNewAccountButton() {
    return instance.find(
      (node) =>
        node.type === 'button' &&
        node.props.className === 'app__new-account-button',
    );
  }

  it('renders without crashing', () => {
    expect(instance).toBeDefined();
  });

  describe('with a single account', () => {
    it('should render a single counter by default', () => {
      const counter = instance.findByType(Counter);

      expect(counter).toBeDefined();
    });

    it('should increment the account balance when the onIncrement callback is called', () => {
      const counter = instance.findByType(Counter);

      counter.props.onIncrement();

      expect(counter.props.value).toBe(1);
    });

    it('should decrement the account balance when the onDecrement callback is called', () => {
      const counter = instance.findByType(Counter);

      counter.props.onDecrement();

      expect(counter.props.value).toBe(-1);
    });
  });

  it('should have a button to open a new account', () => {
    const openNewAccountButton = getOpenNewAccountButton();

    expect(openNewAccountButton).toBeDefined();
  });

  describe('with multiple accounts', () => {
    it('should show another counter when a new account is opened', () => {
      const openNewAccountButton = getOpenNewAccountButton();
      openNewAccountButton.props.onClick();

      const counters = instance.findAllByType(Counter);

      expect(counters.length).toBe(2);
    });

    it("should set new account's balance to 0", () => {
      const openNewAccountButton = getOpenNewAccountButton();
      openNewAccountButton.props.onClick();

      const counters = instance.findAllByType(Counter);

      expect(counters[1].props.value).toBe(0);
    });

    it('should handle account balances independently', () => {
      const openNewAccountButton = getOpenNewAccountButton();
      openNewAccountButton.props.onClick();

      const counters = instance.findAllByType(Counter);

      counters[0].props.onIncrement();
      counters[1].props.onDecrement();

      expect(counters[0].props.value).toBe(1);
      expect(counters[1].props.value).toBe(-1);
    });

    it('should create 9 accounts when the button is clicked 9 times', () => {
      const openNewAccountButton = getOpenNewAccountButton();
      for (let i = 0; i < 9; i++) {
        openNewAccountButton.props.onClick();
      }

      const counters = instance.findAllByType(Counter);

      expect(counters.length).toBe(10);
    });
  });
});
