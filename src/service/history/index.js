import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import * as moment from 'moment';

const useAxiosHistory = () => {
    const [fore, setFore] = useState([]);
    const [location, setLocation] = useState({});
    const currentWeather = useSelector((state) => state.current.value);
    const historical = useSelector((state) => state.historical.value);
    const fetchData = () => {
        axios
            .get(`http://api.weatherapi.com/v1/history.json?key=f0106112791a4d5486c104334223105`, {
                params: {
                    q: currentWeather,
                    dt: `${moment().format('YYYY')}-${moment().format('MM')}-${historical}`,
                },
            })
            .then((res) => {
                setFore(res.data.forecast.forecastday);
                setLocation(res.data.location);
            })
            .catch((err) => {
                throw new Error('Invaid Syntax~');
            })
            .finally(() => {});
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [currentWeather, historical]);
    return { fore, location };
};
export default useAxiosHistory;
