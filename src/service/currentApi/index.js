import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useAxiosCurrent = () => {
    const [current, setCurrent] = useState([]);
    const [condition, setCondition] = useState({});
    const [location, setLocation] = useState({});
    const currentWeather = useSelector((state) => state.current.value);

    const fetchData = () => {
        axios
            .get(`https://api.weatherapi.com/v1/current.json?key=f0106112791a4d5486c104334223105&`, {
                params: {
                    q: currentWeather,
                    aqi: 'yes',
                },
            })
            .then((res) => {
                setCurrent(res.data.current);
                setCondition(res.data.current.condition.text);
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
    }, [currentWeather]);
    return { current, condition, location };
};
export default useAxiosCurrent;
