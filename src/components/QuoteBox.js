import React from 'react';
import QuoteButton from './QuoteButton.js';
import TwitterButton from './TwitterButton.js';
import QuoteBoxStyle from './QuoteBoxStyle.css';
import { CSSTransitionGroup } from 'react-transition-group';

import FaQuoteLeft from 'react-icons/lib/fa/quote-left';
import FaQuoteRight from 'react-icons/lib/fa/quote-right';

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
    });
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
      this.updateBodyColor();
      // console.log(data)
      // console.log(this.state.quote)
      // console.log(this.state.author)
    });

    //change color after Click
    this.getRandomColor();

  }

  updateBodyColor = () => {
    document.body.style.backgroundColor = this.state.color;
  }

  shareTwitter = () => {
    //Using ES6 template literas (backticks)
    window.open(`https://twitter.com/intent/tweet?text="${this.state.quote}" - ${this.state.author}`);
    console.log('twitter');
  }



  getRandomColor = () => {
    const randColors = ['#5d94af','#2aaa79','#6e42ce','#802D15','#D4826A','#D4A46A','#804F15','#6F90A2','#13B510','#6F4D8F','#9277AC','#69802E','#F01A83','#A55800','#FF971C','#FFD300','#FFD300','#837EB1','#2B4A6F','#984C8A','#C56277']
    let number = Math.floor(Math.random() * randColors.length);

    this.setState({
      color: randColors[number]
    })

    //console.log(randColors[number]);
  }


  render(){
    return(

      <div className='Box' style={{borderColor:this.state.color}}>
        <CSSTransitionGroup
          transitionName='fade'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={.2}>
            <p className='Quote' key={this.state.quote}>
              <FaQuoteLeft className='Color quoteSize' style={{color:this.state.color, transitionDuration: '1s'}}/>
                {this.state.quote}
              <FaQuoteRight className='Color quoteSize' style={{color: this.state.color, transitionDuration: '1s'}}/>
            </p>
        </CSSTransitionGroup>

        <CSSTransitionGroup
          transitionName='fade'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={.2}>
            <p className='Author' key={this.state.author}>- {this.state.author}</p>
        </CSSTransitionGroup>


        <div className='ButtonDiv'>
          <TwitterButton color={this.state.color} click={this.shareTwitter}/>
          <QuoteButton  color={this.state.color} click={this.handleClick} />
        </div>


      </div>

    );
  }
}

export default QuoteBox;
