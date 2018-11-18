import React, { Component } from 'react';

import './App.css';
import AccountsPage from './components/AccountsPage';

class App extends Component {
  state = {
    balances: [0],
  };

  render() {
    const { balances } = this.state;

    return (
      <div className="app">
        <h1>React state management workshop</h1>
        <h2>Multiple accounts with prop-drilling</h2>

        <AccountsPage
          balances={balances}
          openNewAccount={this._openNewAccount}
          incrementBalance={this._incrementBalance}
          decrementBalance={this._decrementBalance}
        />
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
