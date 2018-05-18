import React from 'react';
import QuoteButton from './QuoteButton.js';
import TwitterButton from './TwitterButton.js';
import QuoteBoxStyle from './QuoteBoxStyle.css';

import FaQuoteLeft from 'react-icons/lib/fa/quote-left';
import FaQuoteRight from 'react-icons/lib/fa/quote-right';

//const randomColors = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'];
class QuoteBox extends React.Component{



  constructor(props){
    //Make sure to pass props to base constructor
    super(props);
    this.state = {
      quote: '',
      author: '',
      color: '#64E6BA'
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
      // console.log(this.state.quote)
      // console.log(this.state.author)
    })


  }

  handleClick = () => {
    //fetch quote from api
    fetch('https://talaikis.com/api/quotes/random/')
    .then(result => result.json())
    .then(data => {
      this.setState({
        quote: data.quote,
        author: data.author
      })
      // console.log(data)
      // console.log(this.state.quote)
      // console.log(this.state.author)
    });

    //change color after Click
    this.getRandomColor();
    // console.log(this.state.color)

  }

  shareTwitter = () => {
    //Using ES6 template literas (backticks)
    window.open(`https://twitter.com/intent/tweet?text="${this.state.quote}" - ${this.state.author}`);
    console.log('twitter');
  }



  getRandomColor = () => {
    const randColors = ['#5d94af','#2aaa79','#2aaa79','#6e42ce']
    let number = Math.floor(Math.random() * randColors.length);


    this.setState({
      color: randColors[number]
    })
    console.log(randColors[number]);
  }


  render(){
    return(
    <React.Fragment>
      <div className='Box' style={{borderColor:this.state.color}}>

        <p className='Quote'>
          <FaQuoteLeft size={40} className='Color' style={{color: this.state.color, transitionDuration: '1s'}}/>
          {this.state.quote}
          <FaQuoteRight size={40} className='Color' style={{color: this.state.color, transitionDuration: '1s'}}/>
        </p>

        <p className='Author'>-{this.state.author}</p>



        <div className='ButtonDiv'>
          <TwitterButton color={this.state.color} click={this.shareTwitter}/>
          <QuoteButton  color={this.state.color} click={this.handleClick} />
        </div>

      </div>
    </React.Fragment>
    );
  }
}

export default QuoteBox;
//<button onClick={this.getQuote}>Display quote</button>
  // <div className='Divider' style={{backgroundColor:this.state.color}}></div>
