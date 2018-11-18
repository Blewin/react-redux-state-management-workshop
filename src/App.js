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
    // TODO: complete
  };

  // QUESTION: why is _onIncrementBalance a function that returns a function?
  _onIncrementBalance = (index) => () => {
    // TODO: complete
  };

  _onDecrementBalance = (index) => () => {
    // TODO:
  };
}

export default App;
