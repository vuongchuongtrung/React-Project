import React, { Component } from 'react';
//import logo from './logo.svg';
import sun from './sun.png';
import common from './constants/Common';
import PlacesNav from './PlacesNav';
import './App.css';

class App extends Component {
  onPlaceClick(text) {
    //console.log('onPlaceClick: ', text)
    console.log(this)
    this.setState({
      selectedPlace: text
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={sun} className="App-logo" alt="logo" />
          <h2>{common.APP_TITLE}</h2>
        </div>

        <PlacesNav onPlaceClick={this.onPlaceClick.bind(this)} />

        <div className="wheather-content" />
      </div>
    );
  }
}

export default App;
