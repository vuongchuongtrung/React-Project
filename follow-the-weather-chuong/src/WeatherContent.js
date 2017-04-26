import React, { Component } from 'react';
import weatherData from './WeatherData';

class WeatherContent extends Component {
  renderTableHeader() {
    return (
      <tr>
        <th>Current</th>
        <th>Today</th>
        <th>Tonight</th>
        <th>Tomorrow</th>
      </tr>
    )
  }

  renderTableBody(currentData) {
    return (
      <tbody>
        <tr>
          <td>{currentData.current.temperature}</td>
        </tr>
      </tbody>
    )
  }

  render() {
    const {placeName} = this.props;
    const currentData = weatherData[placeName];

    if (currentData) {
      return null;
    }

    return (
      <div className="weather-content">
        <h2>Weather in {placeName}</h2>

      <table>
        <thead>
          {this.renderTableHeader()}
        </thead>
          {this.renderTableBody(currentData)}
      </table>
      </div>
    )
  }
}

export default WeatherContent;
