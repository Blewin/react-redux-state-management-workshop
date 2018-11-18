import React from 'react';

import AccountsContext from '../accounts-context';

import Counter from './Counter';

export default function AccountsPanel() {
  // TODO: access data with AccountsContext.Consumer
  return (
    <div className="content">
      {balances.map((balance, index) => (
        <Counter
          key={index}
          value={balance}
          onIncrement={incrementBalance(index)}
          onDecrement={decrementBalance(index)}
        />
      ))}
    </div>
  );
}
