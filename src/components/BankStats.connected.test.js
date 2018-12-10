import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from "react-redux";

import ConnectedBankStats, { BankStats, mapDispatchToProps, mapStateToProps } from './BankStats';
import { store } from '../store';

/* Those are more of integration tests */
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

  describe('mapDispatchToProps', () => {
    it('should be defined', () => {
      expect(mapDispatchToProps).toBeDefined();
    });

    it('should correctly dispatch an action', () => {
      const mockDispatch = jest.fn();
      mockDispatch.mockReturnValue();

      mapDispatchToProps(mockDispatch).openNewAccount();

      const calls = mockDispatch.mock.calls;
      expect(calls).toEqual([[{type: 'CREATE'}]]);
    })
  })

  describe('mapStateToProps', () => {
    it('should be defined', () => {
      expect(mapStateToProps).toBeDefined();
    });

    it('should correctly count empty accounts state', () => {
      const stateWithNoAccounts = {
        accounts: {},
      }

      expect(mapStateToProps(stateWithNoAccounts)).toEqual({
        length: 0,
      });
    })

    it('should correctly count empty accounts state', () => {
      const stateWithNoAccounts = {
        accounts: {
          a: 3,
          b: 2,
          c: 1,
        },
      }

      expect(mapStateToProps(stateWithNoAccounts)).toEqual({
        length: 3,
      });
    })
  })
});
