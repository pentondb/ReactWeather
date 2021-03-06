var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        var that = this;

        // debugger;
        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });

        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function (e) {
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
            // alert(`openWeatherMap error: ${e.message}`);
        });

    },
    componentDidMount: function () {
        var location = this.props.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    componentWillReceiveProps: function (newProps) {
        var location = newProps.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    render: function () {
        var { isLoading, temp, location, errorMessage } = this.state;

        function renderMsg() {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMsg location={location} temp={temp} />;
            }
        }

        function renderError() {
            if (typeof errorMessage === 'string') {
                // alert(`renderError: ${errorMessage}`);
                return (
                    <ErrorModal message={errorMessage} />
                );
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMsg()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;
