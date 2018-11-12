var React = require('react');

var WeatherMsg = ({ temp, location }) => {
    return (
        <p>It's {temp} in {location}</p>
    );
};

module.exports = WeatherMsg;
