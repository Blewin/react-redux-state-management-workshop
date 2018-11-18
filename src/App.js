import React, { Component } from 'react';

import './App.css';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>React state management workshop</h1>
        <h2>Single Counter</h2>

        <div className="content">
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
