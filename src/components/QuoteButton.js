import React from 'react';
import FaArrowRight from 'react-icons/lib/fa/arrow-right';

class QuoteButton extends React.Component {

  render(){
    return(
      <button className='ButtonStyle' onClick={this.props.click}
         style={{
           color: this.props.color,
           borderColor: this.props.color}}>
        <FaArrowRight size={20}/>
      </button>
    );
  }
}

export default QuoteButton;
