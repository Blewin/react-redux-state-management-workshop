import React from 'react';

import AccountsContext from '../accounts-context';

import Counter from './Counter';

export default function AccountsPanel() {
  return (
    <div className="content">
      <AccountsContext.Consumer>
        {({ balances, incrementBalance, decrementBalance }) =>
          balances.map((balance, index) => (
            <Counter
              key={index}
              value={balance}
              onIncrement={incrementBalance(index)}
              onDecrement={decrementBalance(index)}
            />
          ))
        }
      </AccountsContext.Consumer>
    </div>
  );
}
