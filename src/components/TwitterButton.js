import React from 'react';


class TwitterButton extends React.Component {
//<button onClick={this.props.click}>Twitter Button</button>

  render(){
    return(
      <button onClick={this.props.click} >
        Twitter
      </button>
    );

  }
}

export default TwitterButton;
