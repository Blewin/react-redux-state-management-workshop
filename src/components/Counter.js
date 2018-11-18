import React, { Component } from 'react';

import './Counter.css';

export default class Counter extends Component {
  state = {
    value: 0,
  };

  render() {
    const { value } = this.state;

    return (
      <div className="counter">
        <button onClick={this._onMinusClicked} className="counter__button">
          -
        </button>

        <span className="counter__value">{value}</span>

        <button onClick={this._onPlusClicked} className="counter__button">
          +
        </button>
      </div>
    );
  }

  _onMinusClicked = () => {
    this.setState({
      value: this.state.value - 1,
    });
  };

  _onPlusClicked = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };
}
