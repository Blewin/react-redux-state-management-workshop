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

  function rerender() {
    testRenderer.update(<Counter />);
  }

  beforeEach(() => {
    testRenderer = TestRenderer.create(<Counter />);
    instance = testRenderer.root;
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

  it('should display -1 after clicking the minus button', () => {
    const span = getValueSpan();
    const minusButton = getMinusButton();

    minusButton.props.onClick();
    rerender();

    expect(span.children[0]).toEqual('-1');
  });

  it('should display -2 after clicking the minus button twice', () => {
    const span = getValueSpan();
    const minusButton = getMinusButton();

    minusButton.props.onClick();
    rerender();
    minusButton.props.onClick();
    rerender();

    expect(span.children[0]).toEqual('-2');
  });

  it('should display 1 after clicking the plus button', () => {
    const span = getValueSpan();
    const plusButton = getPlusButton();

    plusButton.props.onClick();
    rerender();

    expect(span.children[0]).toEqual('1');
  });

  it('should display 2 after clicking the plus button twice', () => {
    const span = getValueSpan();
    const plusButton = getPlusButton();

    plusButton.props.onClick();
    rerender();
    plusButton.props.onClick();
    rerender();

    expect(span.children[0]).toEqual('2');
  });
});
