import React from 'react';
import TestRenderer from 'react-test-renderer';

import Counter from './Counter';

describe('Counter', () => {
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
  let onIncrement;
  /**
   * @type {jest.Mock}
   */
  let onDecrement;
  /**
   * @type {jest.Mock}
   */
  let onDelete;

  function getValueSpan() {
    return instance.find((node) => node.props.className === 'counter__value');
  }

  function getMinusButton() {
    return instance.find(
      (node) => node.type === 'button' && node.children[0] === '-',
    );
  }

  function getPlusButton() {
    return instance.find(
      (node) => node.type === 'button' && node.children[0] === '+',
    );
  }

  function getDeleteButton() {
    return instance.find(
      (node) => node.type === 'button' && node.children[0] === 'DELETE',
    );
  }

  beforeEach(() => {
    onIncrement = jest.fn();
    onDecrement = jest.fn();
    onDelete = jest.fn();

    testRenderer = TestRenderer.create(
      <Counter value={0} onIncrement={onIncrement} onDecrement={onDecrement} onDelete={onDelete}/>,
    );
    instance = testRenderer.root;
  });

  describe('delete button', () => {
    it('should exist', () => {
      expect(getDeleteButton()).toBeDefined();
    });

    it('should call only the correct callback', () => {
      const deleteButton = getDeleteButton();

      deleteButton.props.onClick();

      expect(onDelete).toHaveBeenCalled();
      expect(onDecrement).not.toHaveBeenCalled();
      expect(onIncrement).not.toHaveBeenCalled();
    })
  });

  it('should contain a span with class counter__value', () => {
    expect(getValueSpan()).toBeDefined();
  });

  it('should contain a button with a minus sign', () => {
    expect(getMinusButton()).toBeDefined();
  });

  it('should contain a button with a plus sign', () => {
    expect(getPlusButton()).toBeDefined();
  });

  it('should display 0 by default', () => {
    const span = getValueSpan();

    expect(span.children[0]).toEqual('0');
  });

  it('should call the onDecrement callback when clicking the minus button', () => {
    const minusButton = getMinusButton();

    minusButton.props.onClick();

    expect(onDecrement).toHaveBeenCalled();
  });

  it('should not call the onIncrement callback when clicking the minus button', () => {
    const minusButton = getMinusButton();

    minusButton.props.onClick();

    expect(onIncrement).not.toHaveBeenCalled();
  });

  it('should call the onIncrement callback when clicking the plus button', () => {
    const plusButton = getPlusButton();

    plusButton.props.onClick();

    expect(onIncrement).toHaveBeenCalled();
  });

  it('should not call the onDecrement callback when clicking the plus button', () => {
    const plusButton = getPlusButton();

    plusButton.props.onClick();

    expect(onDecrement).not.toHaveBeenCalled();
  });
});
