import React, { Component } from 'react';

import './App.css';
import Counter from './components/Counter';

class App extends Component {
  state = {
    balances: [0],
  };

  render() {
    const { balances } = this.state;

    return (
      <div className="app">
        <h1>React state management workshop</h1>
        <h2>Multiple accounts</h2>

        <button
          onClick={this._onOpenNewAccountClicked}
          className="app__new-account-button"
        >
          Open new account
        </button>

        <div className="content">
          {balances.map((balance, index) => (
            <Counter
              key={index}
              value={balance}
              onIncrement={this._onIncrementBalance(index)}
              onDecrement={this._onDecrementBalance(index)}
            />
          ))}
        </div>
      </div>
    );
  }

  _onOpenNewAccountClicked = () => {
    this.setState({
      balances: [...this.state.balances, 0],
    });
  };

  _onIncrementBalance = (index) => () => {
    const balancesCopy = this.state.balances.slice(0);
    balancesCopy[index]++;

    this.setState({
      balances: balancesCopy,
    });
  };

  _onDecrementBalance = (index) => () => {
    const balancesCopy = this.state.balances.slice(0);
    balancesCopy[index]--;

    this.setState({
      balances: balancesCopy,
    });
  };
}

export default App;
