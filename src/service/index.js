import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set_api } from '~/features/DailyWeather';

const WeatherApi = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        axios
            .get(`https://api.weatherapi.com/v1/forecast.json?key=f0106112791a4d5486c104334223105&`, {
                params: {
                    q: 'Hanoi',
                    days: 10,
                    aqi: 'yes',
                    alerts: 'no',
                },
            })
            .then(function (res) {
                dispatch(set_api(res));
                console.log(res);
            });
    }, []);
    return <div></div>;
};
export default WeatherApi;
