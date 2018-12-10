import React, { Component } from 'react';
import { connect } from "react-redux";

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

        <button onClick={this._onDeleteClicked} className="counter__button">
          DELETE
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

  _onDeleteClicked = () => {
    this.props.onDelete();
  };
}

function mapStateToProps(state, props) {
  return {
    value: state.accounts[props.userId],
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    onIncrement: () => dispatch({type: 'INCREMENT', id: props.userId}),
    onDecrement: () => dispatch({type: 'DECREMENT', id: props.userId}),
    onDelete: () => dispatch({type: 'DELETE', id: props.userId}),
  }
}

export const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);