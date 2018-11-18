import React from 'react';
import TestRenderer from 'react-test-renderer';

import App from './App';

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

  it('renders without crashing', () => {
    expect(instance).toBeDefined();
  });
});
