import React, { Component } from 'react';
import './App.css';

import QuoteBox from './components/QuoteBox';

class App extends Component {



  render() {
    return (
      <div className="Quote Generator 0.1">
          <h1>Quote Generator v.0.0</h1>
          <QuoteBox/>
      </div>
    );
  }
}

export default App;
