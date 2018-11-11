var React = require('react');

var WeatherMsg = ({ temp, location }) => <p>It's {temp} in {location}</p>;

module.exports = WeatherMsg;
