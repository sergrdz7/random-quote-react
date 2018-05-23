import React, { Component } from 'react';
import './App.css';

import QuoteBox from './components/QuoteBox';

class App extends Component {



  render() {
    return (
      <div>
          <h1 className='Header'>Quote Generator</h1>
          <QuoteBox/>
      </div>
    );
  }
}

export default App;
