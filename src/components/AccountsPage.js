import React from 'react';

import BankStats from './BankStats';
import AccountsPanel from './AccountsPanel';

/**
 * NOTE: this component does not have to use props now. Data is passed without this component's
 * knowledge and involvement
 */
export default function AccountsPage() {
  return (
    <div>
      <BankStats />
      <AccountsPanel />
    </div>
  );
}
