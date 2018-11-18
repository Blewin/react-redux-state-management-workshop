import React from 'react';

// NOTE: this file does not have to be modified

export default function BankStats({ balances, openNewAccount }) {
  return (
    <div>
      <p>{balances.length} open accounts.</p>

      <button onClick={openNewAccount} className="new-account-button">
        Open new account
      </button>
    </div>
  );
}
