import React from 'react';

import AccountsContext from '../accounts-context';

export default function BankStats() {
  return (
    <AccountsContext.Consumer>
      {({ balances, openNewAccount }) => (
        <div>
          <p>{balances.length} open accounts.</p>

          <button onClick={openNewAccount} className="new-account-button">
            Open new account
          </button>
        </div>
      )}
    </AccountsContext.Consumer>
  );
}
