import React from 'react';
import QuoteButton from './QuoteButton.js';

class QuoteBox extends React.Component{
//Add state which to contain current or different
//quotes to pick from

  constructor(props){
    //Make sure to pass props to base constructor
    super(props);
    this.state = {
      quote: '',
      author: ''
    }

    //necesarry bindings
    // this.getQuote = this.getQuote.bind(this);
     // http://quotes.rest/quote/random.json
     // http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1
     // http://api.forismatic.com/api/1.0/
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
    // //get quote from setState
    fetch('https://talaikis.com/api/quotes/random/')
    .then(result => result.json())
    .then(data => {
      this.setState({
        quote: data.quote,
        author: data.author
      })
      console.log(data)
      // console.log(data.quote);
      // console.log(data.author)
      console.log(this.state.quote)
      console.log(this.state.author)

    });

  }

  render(){
    return(
    <div>
      <div>Display Quote</div>
      <QuoteButton click={this.getQuote}/>
      <h1>{this.state.quote}</h1>

    </div>
    );
  }
}

export default QuoteBox;
//<button onClick={this.getQuote}>Display quote</button>
