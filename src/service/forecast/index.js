import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const useAxios = () => {
    const [data, setData] = useState([]);
    const currentWeather = useSelector((state) => state.current.value);
    const fetchData = () => {
        axios
            .get(`https://api.weatherapi.com/v1/forecast.json?key=f0106112791a4d5486c104334223105&`, {
                params: {
                    q: currentWeather,
                    days: 10,
                    aqi: 'yes',
                    alerts: 'no',
                },
            })
            .then((res) => {
                setData(res.data.forecast.forecastday);
            })
            .catch((err) => {
                throw new Error('Invaid Syntax~');
            })
            .finally(() => {});
    };
    useEffect(() => {
        fetchData();
    }, [currentWeather]);
    return { data };
};
export default useAxios;
