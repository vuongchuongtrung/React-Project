import React, { Component } from 'react';

class WeatherContent extends Component {
  render() {
    const {placeName} = this.props;

    return (
      <div className="wheather-content">
        <h2>Weather in {placeName}</h2>
      </div>
    );
  }
}

export default WeatherContent;
