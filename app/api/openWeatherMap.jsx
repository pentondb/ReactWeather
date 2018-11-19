var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=22f78f2da4adfcfe189b61a10da87ade';

// http://api.openweathermap.org/data/2.5/weather?q=Birmingham&units=imperial&appid=22f78f2da4adfcfe189b61a10da87ade

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            // debugger;
            if (res.data.cod && res.data.message) {
                // throw new Error(res.data.message);
                throw new Error(`res.data.cod = ${res.data.cod}, res.data.message = ${res.data.message}`);
            } else {
                return res.data.main.temp;
            }
        }, function (err) {
            // // res.data.message is undefined? even though it shows on the JSON returned by the page?
            // // previously the function accepted res
            // // throw new Error(res.data.message);
            // later version of axios than used in the app setup passes err instead
            // throw new Error(err.response.data.message);
            /* ... but I like the error message showing the city name that was provided */
            throw new Error(`${location} not found`);
        });
    }
};