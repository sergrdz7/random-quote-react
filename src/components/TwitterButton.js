import React from 'react';
import FaTwitter from 'react-icons/lib/fa/twitter';


class TwitterButton extends React.Component {
//<button onClick={this.props.click}>Twitter Button</button>


  render(){
    return(
      <button className='ButtonStyle' onClick={this.props.click}>
        <FaTwitter size={20}/>
      </button>
    );

  }
}

export default TwitterButton;
