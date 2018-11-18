import React from 'react';

import Counter from './Counter';

// NOTE: this file does not have to be modified

export default function AccountsPanel({
  balances,
  incrementBalance,
  decrementBalance,
}) {
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
