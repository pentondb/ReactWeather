var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>Welcome to the About page!</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a>
                </li>
                <li>
                    <a href="https://openweathermap.org">OpenWeatherMap</a>
                </li>
                <li>
                    <a href="https://www.google.com">Google</a>
                </li>
            </ul>
        </div>
    );
};

module.exports = About;
