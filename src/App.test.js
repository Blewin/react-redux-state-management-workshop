import React from 'react';
import TestRenderer from 'react-test-renderer';

import App from './App';
import { Provider } from "react-redux";
import { store } from './store';

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
    testRenderer = TestRenderer.create(
      <Provider store={store}>
        <App />
      </Provider>);
    instance = testRenderer.root;
  });

  it('renders without crashing', () => {
    expect(instance).toBeDefined();
  });
});
