import React from 'react';
import QuoteButton from './QuoteButton.js';
import TwitterButton from './TwitterButton.js';
import QuoteBoxStyle from './QuoteBoxStyle.css';

import FaQuoteLeft from 'react-icons/lib/fa/quote-left';
import FaQuoteRight from 'react-icons/lib/fa/quote-right';


class QuoteBox extends React.Component{

  constructor(props){
    //Make sure to pass props to base constructor
    super(props);
    this.state = {
      quote: '',
      author: ''
    }
  }
  componentDidMount() {
    fetch('https://talaikis.com/api/quotes/random/')
    .then(result => result.json())
    .then(data => {
      this.setState({
        quote: data.quote,
        author: data.author
      })
      console.log(this.state.quote)
      console.log(this.state.author)
    });
  }

  getQuote = () => {
    //fetch quote from api
    fetch('https://talaikis.com/api/quotes/random/')
    .then(result => result.json())
    .then(data => {
      this.setState({
        quote: data.quote,
        author: data.author
      })
      console.log(data)
      console.log(this.state.quote)
      console.log(this.state.author)

    });

  }

  shareTwitter = () => {
    //Using ES6 template literas (backticks)
    window.open(`https://twitter.com/intent/tweet?text="${this.state.quote}" - ${this.state.author}`);
    console.log('twitter');
  }

  render(){
    return(
    <React.Fragment>
      <div className='Box'>

        <p className='Quote'><FaQuoteLeft size={30} className='Color' /> {this.state.quote} <FaQuoteRight size={30} className='Color' /></p>

        <p className='Author'>-{this.state.author}</p>

        <div className='Divider'></div>

        <div className='ButtonDiv'>
          <TwitterButton click={this.shareTwitter}/>
          <QuoteButton click={this.getQuote}/>
        </div>

      </div>



    </React.Fragment>
    );
  }
}

export default QuoteBox;
//<button onClick={this.getQuote}>Display quote</button>
