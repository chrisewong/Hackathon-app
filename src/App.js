import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    

this.state = 
  {
  symbol: '',
  price: []
  }
  
  }


handleChange(e) {
  this.setState({symbol: e.target.value});
  this.setState({price: e.target.value});
}
handleClick(e) {
  e.preventDefault();
  e.currentTarget.reset();
}



onClick() {
  axios.get('https://www.alphavantage.co/query?function=SMA&symbol=&interval=15min&time_period=10&series_type=close&apikey=C7GEL2PLY274MFLO')
    .then(function(response) {
      console.log(response);
    
    })
    .catch(error => {
       console.log('Error fetching and parsing data', error);
    })
}




  render() {
    var symbol = this.state.symbol;
    return (
        
      <div className="App">
        <header className="App-header">
          <h1>{this.state.symbol}</h1>
          <h1>{this.state.price}</h1>
          
        </header>
        
        

      <div>
      <form className='App' onSubmit={this.handleClick}>
      <input className='button' type='text' value={symbol} />
      <button type='submit' id='submit'>Enter</button>
      </form>
      </div>
      </div>
      
    );
  }
}

export default App;

