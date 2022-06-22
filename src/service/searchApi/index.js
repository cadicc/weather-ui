import { faWarning } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useAxiosSearch = () => {
    const [searchApi, setSearchApi] = useState([]);
    const searchValue = useSelector((state) => state.search.value);
    const fetchData = () => {
        axios
            .get(`https://api.weatherapi.com/v1/search.json?key=f0106112791a4d5486c104334223105`, {
                params: {
                    q: searchValue,
                },
            })
            .then((res) => {
                setSearchApi(res.data);
            })
            .catch((err) => {
                console.log('Nhập địa tìm kiếm');
            })
            .finally(() => {});
    };
    useEffect(() => {
        fetchData();
    }, [searchValue]);
    return { searchApi };
};
export default useAxiosSearch;
