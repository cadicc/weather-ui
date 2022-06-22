import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { json_fav } from '~/features/favorites/addFavorite';

const useAxiosFav = () => {
    const [listFav, getListFav] = useState([]);
    const fetchData = () => {
        axios
            .get(`https://api.weatherapi.com/v1/current.json?key=f0106112791a4d5486c104334223105&`, {
                params: {
                    q: 'Paris',
                    aqi: 'yes',
                },
            })
            .then((res) => {
                getListFav(res.data);
            })
            .catch((err) => {
                throw new Error('Sai cu phap', err);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);
    return { listFav };
};
export default useAxiosFav;
