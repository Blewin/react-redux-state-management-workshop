import React, { Component } from 'react';

import './Counter.css';

export default class Counter extends Component {
  render() {
    const { value } = this.props;

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
    this.props.onDecrement();
  };

  _onPlusClicked = () => {
    this.props.onIncrement();
  };
}
