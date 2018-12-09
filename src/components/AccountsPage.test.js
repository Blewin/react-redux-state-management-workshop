import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from "react-redux";

import AccountsPage from './AccountsPage';
import { store } from '../store';

describe('AccountsPage', () => {
  it('renders without crashing', () => {
    const testRenderer = TestRenderer.create(
      <Provider store={store}>
        <AccountsPage />
      </Provider>
    );

    expect(testRenderer.root).toBeDefined();
  });
});
