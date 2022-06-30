import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { css } from '@emotion/css';
import { current_weather } from '~/features/Current';
import { set_activeHome, set_activeHis, set_activeFav } from '~/features/activeNavBar/activeHome';
import sunlight from '~/weatherBackground/light/sunlight.png';
import cloud4 from '~/weatherBackground/cloud/cloud4.png';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AirIcon from '@mui/icons-material/Air';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { get_fav } from '~/features/favorites/addFavorite';
import AddIcon from '@mui/icons-material/Add';

const ListFav = () => {
    const favorites = useSelector((state) => state.addFav.value);
    const favList = useSelector((state) => state.addFav.favList);
    const dispatch = useDispatch();
    console.log(favList);

    useEffect(() => {
        favorites.map((fav, index) => {
            return axios
                .get(`https://api.weatherapi.com/v1/current.json?key=f0106112791a4d5486c104334223105&`, {
                    params: {
                        q: fav,
                        aqi: 'yes',
                    },
                })
                .then((res) => {
                    localStorage.setItem('nameFav', JSON.stringify(res.data));
                    dispatch(get_fav(res.data));
                })
                .catch((err) => {
                    throw new Error('Invaid Syntax', err);
                })
                .finally(() => {});
        });
        // eslint-disable-next-line
    }, [favorites]);

    if (favList.length > 0) {
        return (
            <div
                className={css`
                    display: flex;
                    justify-content: flex-start;
                `}
            >
                {favList.map((item, index) => {
                    return (
                        <div
                            className={css`
                                width: 27%;
                                height: 100%;
                                background-color: #33c5ff;
                                background-image: url(${sunlight});
                                background-size: cover;
                                background-repeat: no-repeat;
                                background-position: 70px;
                                margin: 0 15px;
                                margin-left: 0;

                                &:hover {
                                    box-shadow: #ffffff 0px 2px 10px;
                                }
                            `}
                            key={index}
                            onClick={() => dispatch(current_weather(item.location.name))}
                        >
                            <Link
                                to="/"
                                className={css`
                                    text-decoration: none;
                                `}
                                onClick={() => {
                                    dispatch(set_activeHome(true));
                                    dispatch(set_activeHis(false));
                                    dispatch(set_activeFav(false));
                                }}
                            >
                                <div
                                    className={css`
                                        // background-image: url(${cloud4});
                                        background-size: contain;
                                        background-repeat: no-repeat;
                                        background-position: right;
                                    `}
                                >
                                    <div
                                        className={css`
                                            padding: 15px 10px;
                                            text-shadow: 1px 1px 2px #000000;
                                        `}
                                    >
                                        <span
                                            className={css`
                                                font-size: 14px;
                                                color: #ffffff;
                                            `}
                                        >
                                            {`${item.location.name}, ${item.location.country}`}
                                        </span>
                                        <div
                                            className={css`
                                                display: flex;
                                                color: #ffffff;
                                                justify-content: space-between;
                                                margin-top: 5px;
                                            `}
                                        >
                                            <div
                                                className={css`
                                                    width: 45%;
                                                `}
                                            >
                                                <div>
                                                    <span
                                                        className={css`
                                                            font-size: 30px;
                                                            margin: 5px 0;
                                                        `}
                                                    >
                                                        {item.current.temp_c}
                                                    </span>
                                                    <span>
                                                        <CircleOutlinedIcon
                                                            className={css`
                                                                position: relative;
                                                                top: -5px;
                                                                width: 12px !important;
                                                                height: 12px !important;
                                                                margin-left: 3px;
                                                                margin-bottom: 10px;
                                                            `}
                                                        />
                                                    </span>
                                                </div>
                                                <div>
                                                    <p
                                                        className={css`
                                                            margin: 5px 0;
                                                            font-size: 13px;
                                                            -o-text-overflow: ellipsis;
                                                            text-overflow: ellipsis;
                                                            overflow: hidden;
                                                            display: -webkit-box;
                                                            -webkit-box-orient: vertical;
                                                            -webkit-line-clamp: 2;
                                                        `}
                                                    >
                                                        {item.current.condition.text}
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                className={css`
                                                    width: 55%;
                                                    display: flex;
                                                    justify-content: center;
                                                    font-size: 12px;
                                                `}
                                            >
                                                <div
                                                    className={css`
                                                        margin: 0 5px;
                                                    `}
                                                >
                                                    <div>
                                                        <span>
                                                            <DeviceThermostatIcon
                                                                className={css`
                                                                    width: 15px !important;
                                                                    height: 15px !important;
                                                                    margin-bottom: -2px;
                                                                    margin-right: 5px;
                                                                `}
                                                            />
                                                        </span>
                                                        <span
                                                            className={css`
                                                                margin: 5px 0;
                                                            `}
                                                        >
                                                            {item.current.feelslike_c}
                                                        </span>
                                                        <span>
                                                            <CircleOutlinedIcon
                                                                className={css`
                                                                    position: relative;
                                                                    top: -5px;
                                                                    width: 10px !important;
                                                                    height: 10px !important;
                                                                    margin-left: 3px;
                                                                `}
                                                            />
                                                        </span>
                                                    </div>
                                                    <div
                                                        className={css`
                                                            margin: 5px 0;
                                                        `}
                                                    >
                                                        <span>
                                                            <RemoveRedEyeIcon
                                                                className={css`
                                                                    width: 15px !important;
                                                                    height: 15px !important;
                                                                    margin-bottom: -2px;
                                                                    margin-right: 5px;
                                                                `}
                                                            />
                                                        </span>
                                                        <span>{`${item.current.vis_km} km`}</span>
                                                    </div>
                                                </div>
                                                <div
                                                    className={css`
                                                        margin: 0 5px;
                                                    `}
                                                >
                                                    <div>
                                                        <span>
                                                            <AirIcon
                                                                className={css`
                                                                    width: 15px !important;
                                                                    height: 15px !important;
                                                                    margin-bottom: -2px;
                                                                    margin-right: 5px;
                                                                `}
                                                            />
                                                        </span>
                                                        <span>{`${item.current.wind_kph} km/h`}</span>
                                                    </div>
                                                    <div
                                                        className={css`
                                                            margin: 5px 0;
                                                        `}
                                                    >
                                                        <span>
                                                            <InvertColorsIcon
                                                                className={css`
                                                                    width: 15px !important;
                                                                    height: 15px !important;
                                                                    margin-bottom: -2px;
                                                                    margin-right: 5px;
                                                                `}
                                                            />
                                                        </span>
                                                        <span>{`${item.current.humidity} %`}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
                <div
                    className={css`
                        width: 25%;
                        height: 100%;
                        background-color: #33c5ff;
                    `}
                >
                    <Link to="/favorites/add-favorite">
                        <div
                            className={css`
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                padding: 38px 10px;
                                text-shadow: 1px 1px 2px #000000;
                            `}
                        >
                            <AddIcon
                                className={css`
                                    width: 50px !important;
                                    height: 50px !important;
                                    color: #ffffff;
                                `}
                            />
                        </div>
                    </Link>
                </div>
            </div>
        );
    } else {
        return (
            <div
                className={css`
                    width: 25%;
                    height: 100%;
                    background-color: #33c5ff;
                `}
            >
                <Link to="/favorites/add-favorite">
                    <div
                        className={css`
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            padding: 38px 10px;
                            text-shadow: 1px 1px 2px #000000;
                        `}
                    >
                        <AddIcon
                            className={css`
                                width: 50px !important;
                                height: 50px !important;
                                color: #ffffff;
                            `}
                        />
                    </div>
                </Link>
            </div>
        );
    }
};
export default ListFav;
