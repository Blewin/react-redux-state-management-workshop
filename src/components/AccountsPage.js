import React from 'react';

import BankStats from './BankStats';
import AccountsPanel from './AccountsPanel';

/**
 * NOTE: notice that this component does not need the props directly, but still has to interact
 * with them to pass them to its children
 *
 * i.e. prop-drilling
 */
export default function AccountsPage(props) {
  return (
    <div>
      <BankStats
        balances={props.balances}
        openNewAccount={props.openNewAccount}
      />
      <AccountsPanel
        balances={props.balances}
        incrementBalance={props.incrementBalance}
        decrementBalance={props.decrementBalance}
      />
    </div>
  );
}
