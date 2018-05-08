import React from 'react';

class QuoteButton extends React.Component {

  render(){
    return(
      <button onClick={this.props.click}>Another Button</button>
    );
  }
}

export default QuoteButton;
