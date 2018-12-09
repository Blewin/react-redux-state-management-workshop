import React, { Component } from 'react';

import AccountsPage from './components/AccountsPage';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Redux React state management workshop</h1>
        <h2>Having fun with various Redux shenanigans</h2>
        <AccountsPage />
      </div>
    );
  }
}

