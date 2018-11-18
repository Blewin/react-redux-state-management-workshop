import React, { Component } from 'react';

import './App.css';
import AccountsPage from './components/AccountsPage';
import AccountsContext from './accounts-context';

class App extends Component {
  state = {
    balances: [0],
  };

  render() {
    const { balances } = this.state;
    const accountsContextValue = {
      balances,
      openNewAccount: this._openNewAccount,
      incrementBalance: this._incrementBalance,
      decrementBalance: this._decrementBalance,
    };

    return (
      <div className="app">
        <h1>React state management workshop</h1>
        <h2>Multiple accounts using React Context</h2>

        <AccountsContext.Provider value={accountsContextValue}>
          <AccountsPage />
        </AccountsContext.Provider>
      </div>
    );
  }

  _openNewAccount = () => {
    this.setState({
      balances: [...this.state.balances, 0],
    });
  };

  _incrementBalance = (index) => () => {
    const balancesCopy = this.state.balances.slice(0);
    balancesCopy[index]++;

    this.setState({
      balances: balancesCopy,
    });
  };

  _decrementBalance = (index) => () => {
    const balancesCopy = this.state.balances.slice(0);
    balancesCopy[index]--;

    this.setState({
      balances: balancesCopy,
    });
  };
}

export default App;
