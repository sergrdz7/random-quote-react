import React from 'react';

class QuoteButton extends React.Component {

  render(){
    return(
      <button onClick={this.props.click}>New Quote</button>
    );
  }
}

export default QuoteButton;
