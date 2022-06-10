import CurrentWeather from '~/components/current/currentWeather';
import DailyWeather from '~/components/Daily/index';
// import HourlyWeather from '~/components/Hourly/index';
// import { useEffect } from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { get_api } from '~/features/DailyWeather';

const Forecast = (props) => {
    // const dispatch = useDispatch();
    // const weather = useSelector((state) => state.weather.value);
    // let apiWeather = `https://api.weatherapi.com/v1/forecast.json?key=f0106112791a4d5486c104334223105&q=${weather}&days=10&aqi=yes&alerts=no`;
    // useEffect(() => {
    //     axios
    //         .get(apiWeather)
    //         .then(function (res) {
    //             return res.data;
    //         })
    //         .catch(function (error) {})
    //         .then(function () {});
    // });
    return (
        <div>
            <CurrentWeather />
            <DailyWeather />
            {/* <HourlyWeather /> */}
        </div>
    );
};

export default Forecast;
