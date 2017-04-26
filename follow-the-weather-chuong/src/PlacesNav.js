import React, { Component } from 'react';
import places from './constants/Places';

class PlacesNav extends Component {
  onClick(text) {
    //console.log(text);
    this.props.onPlaceClick(text);
  }

  renderPlaces() {
    var elements = [];
    for (var p in places) {
      //console.log(p);
      const{text} = places[p];
      elements.push(
        <h2 onClick={this.onClick.bind(this,text)}>
          {text}
        </h2>
      );
    }
    return elements;
  }

  render() {
    return (
      <div className="places-nav">
        {this.renderPlaces()}
      </div>
    );
  }
}

export default PlacesNav;
