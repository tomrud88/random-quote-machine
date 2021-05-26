import React,{Component} from 'react';
import './quote-box/quote.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'




const developQuotes = [
    {
        quote: `When I’m working on a problem, 
        I never think about beauty. 
        I think only how to solve the problem. 
        But when I have finished, if the solution is not beautiful, I know it is wrong.`,
        author: `- Freeman Dyson`
    },
    {
        quote: `The Scrum idea of a separated Scrum Master is good for Scrum, 
        but not appropriate for most projects. Good development requires not just talkers but doers.`,
        author: `— Bertrand Meyer`
    },
    {
        quote: `You can mass-produce hardware; 
        you cannot mass-produce software; you cannot mass-produce the human mind.`,
        author: `— Michio Kaku`
    },
    {
        quote: `Measuring programming progress by lines of code is like measuring aircraft building progress by weight.`,
        author: `— Bill Gates`
    },
    {
        quote: `Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.`,
        author: `— John F. Woods`
    },
    {
        quote: `Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.`,
        author: `— Albert Einstein`
    },
    {
        quote: `Programming is like sex. One mistake and you have to support it for the rest of your life.`,
        author: `— Michael Sinz`
    },
    {
        quote: `I have always wished for my computer to be as easy to use as my telephone; 
        my wish has come true because I can no longer figure out how to use my telephone.`,
        author: `— Bjarne Stroustrup`
    },
    {
        quote: `If McDonalds were run like a software company, one out of every hundred Big Macs would give you food poisoning, 
        and the response would be, ‘We’re sorry, here’s a coupon for two more.’`,
        author: `— Mark Minasi`
    },
    {
        quote: `Sometimes it pays to stay in bed on Monday, 
        rather than spending the rest of the week debugging Monday’s code.`,
        author: `— Christopher Thompson`
    },
    {
        quote: `The best way to get a project done faster is to start sooner.`,
        author: `— Jim Highsmith`
    },
    {
        quote: `How does a project get to be a year late?… One day at a time.`,
        author: `— Fred Brooks`
    },
    {
        quote: `It’s OK to figure out murder mysteries, 
        but you shouldn’t need to figure out code. You should be able to read it.`,
        author: `— Steve McConnell`
    },
    {
        quote: `If you cannot grok the overall structure of a program while taking a shower, 
        you are not ready to code it.`,
        author: `— Richard Pattis`
    },
    {
        quote: `Without requirements or design, programming is the art of adding bugs to an empty text file.`,
        author: `— Louis Srygley`
    },
    {
        quote: `Programmers don’t burn out on hard work, 
        they burn out on change-with-the-wind directives and not ‘shipping’.`,
        author: `— Mark Berry`
    },
    {
        quote: `Walking on water and developing software from a specification are easy if both are frozen.`,
        author: `— Edward V Berard`
    },
    {
        quote: `“Daddy, how is software made?” “Well, 
        when a programmer loves an idea very much they stay up all night and then push to github the next day.`,
        author: `— Sam Kottler`
    },
    {
        quote: `Prolific developers don’t always write a lot of code, instead they solve a lot of problems. 
        The two things are not the same.`,
        author: `— J. Chambers`
    },
    {
        quote: `One bad programmer can easily create two new jobs a year.`,
        author: `— David Parnas`
    },

]
       
 

class Quotes extends Component{
    constructor(props){
        super(props)
    this.state={
        devQuotes: 
            {
                quote: '',
                author: ''
            } 
        
        
    }
    
    this.generateQuote = this.generateQuote.bind(this)
   }

   componentDidMount(){
    window.addEventListener('load',this.generateQuote)
}

    generateQuote() {
        const randomindex = Math.floor(Math.random() * developQuotes.length)
        this.setState({
            devQuotes:{
                quote: developQuotes[randomindex].quote,
                author: developQuotes[randomindex].author
            }
        })
    }

    

    render(){

        return(
            <div className='body'>
            <div id='quote-box' className='quote-box'>
            <div id='text' className='quote-text'>{this.state.devQuotes.quote}</div>
            <div id='author' className='author'>{this.state.devQuotes.author}</div>
            <div className='quote-buttons'>
            <div>
            <a target='_blank' href='https://twitter.com/intent/tweet' id='tweet-quote' className='tweet'>
            <i><FontAwesomeIcon className='twitter' icon={faTwitterSquare} size='4x'/></i></a>
            </div>
            <button id='new-quote' className='new-quote' onClick={this.generateQuote}>new quote</button>
            </div>
            </div>
            </div>
              )
            }

}
export default Quotes