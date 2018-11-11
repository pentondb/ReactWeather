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
        }, function (res) {
            // res.data.message is undefined? even though it shows on the JSON returned by the page?
            // throw new Error(res.data.message);
            throw new Error(`${location} not found`);
        });
    }
};