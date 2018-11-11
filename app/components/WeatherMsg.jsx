var React = require('react');

// var WeatherMsg = React.createClass({
//     render: function () {
//         var { temp, location } = this.props;
//         return (
//             <p>It's {temp} in {location}</p>
//         );
//     }
// });

// var WeatherMsg = (props) => {
//     var { temp, location } = props;
//     return (
//         <p>It's {temp} in {location}</p>
//     );
// };

// var WeatherMsg = ({ temp, location }) => {
//     return (
//         <p>It's {temp} in {location}</p>
//     );
// };

var WeatherMsg = ({ temp, location }) => <p>It's {temp} in {location}</p>;

module.exports = WeatherMsg;
