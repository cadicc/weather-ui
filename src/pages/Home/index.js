import axios from 'axios';
const Forecast = () => {
    axios
        .get(
            'https://api.weatherapi.com/v1/forecast.json?key=f0106112791a4d5486c104334223105&q=Hanoi&days=10&aqi=yes&alerts=no',
        )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            throw new Error('Invaid Syntax!');
        });
    return <h1>Forecast</h1>;
};

export default Forecast;
