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
  // TODO: pass down the props

  return (
    <div>
      <BankStats />
      <AccountsPanel />
    </div>
  );
}
