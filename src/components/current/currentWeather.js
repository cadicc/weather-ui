import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const CurrentWeather = () => {
    const [current, setCurrent] = useState([]);
    const weather = useSelector((state) => state.weather.value);
    useEffect(() => {
        setTimeout(() => {
            axios
                .get(`http://api.weatherapi.com/v1/current.json?key=f0106112791a4d5486c104334223105`, {
                    params: {
                        q: weather,
                        aqi: 'yes',
                    },
                })
                .then(function (res) {
                    document.getElementById(
                        'location',
                    ).innerHTML = `${res.data.location.name}, ${res.data.location.country}`;
                    document.getElementById('temp_c').innerHTML = `${res.data.current.temp_c}`;
                    document.getElementById('icon-weather').src = `${res.data.current.condition.icon}`;
                    document.getElementById('condition').innerHTML = `${res.data.current.condition.text}`;
                    document.getElementById('Updated').innerHTML = `Updated as of ${res.data.current.last_updated}`;
                    document.getElementById('feel_like').innerHTML = `Feels Like ${res.data.current.feelslike_c} `;
                    document.getElementById('wind').innerHTML = `Wind ${res.data.current.wind_kph} km/h `;
                    document.getElementById('visibility').innerHTML = `Visibility ${res.data.current.vis_km} km`;
                    document.getElementById('humidity').innerHTML = `Humidity ${res.data.current.humidity}%`;
                    document.getElementById('precip').innerHTML = `Precipitation ${res.data.current.precip_mm} mm`;
                    document.getElementById('barometer').innerHTML = `Barometer ${res.data.current.pressure_mb} mb`;
                });
        }, 100);
    }, []);

    return (
        <div>
            <div
                className={css`
                    display: flex;
                    justify-items: center;
                    justify-content: center;
                `}
            >
                <div>
                    <div
                        className={css`
                            text-align: center;
                        `}
                    >
                        <p id="location"></p>
                        <div
                            className={css`
                                display: flex;
                                justify-content: center;
                                margin: 20px auto;
                            `}
                        >
                            <img alt="icon-weather" id="icon-weather"></img>
                            <p
                                id="temp_c"
                                className={css`
                                    font-weight: 300;
                                    font-size: 80px;
                                    margin: 0;
                                    line-height: 0.7;
                                `}
                            ></p>
                            <FontAwesomeIcon icon={faCircle} id="temp-icon" />
                        </div>
                        <p
                            id="condition"
                            className={css`
                                margin: 5px 0;
                            `}
                        ></p>
                        <p
                            id="Updated"
                            className={css`
                                margin: 5px 0;
                            `}
                        ></p>
                        <div
                            className={css`
                                display: flex;
                                justify-content: space-around;
                            `}
                        >
                            <span
                                className={css`
                                    display: flex;
                                    justify-content: center;
                                `}
                            >
                                <p
                                    id="feel_like"
                                    className={css`
                                        padding: 0 2px 0 10px;
                                        margin: 5px 0;
                                    `}
                                ></p>
                                <FontAwesomeIcon
                                    id="temp-icon"
                                    icon={faCircle}
                                    className={css`
                                        width: 5px;
                                    `}
                                />
                            </span>
                            <p
                                id="wind"
                                className={css`
                                    padding: 0 10px;
                                    margin: 5px 0;
                                `}
                            ></p>
                            <p
                                id="visibility"
                                className={css`
                                    padding: 0 10px;
                                    margin: 5px 0;
                                `}
                            ></p>
                        </div>
                        <div
                            className={css`
                                display: flex;
                                justify-content: space-around;
                            `}
                        >
                            <p
                                id="barometer"
                                className={css`
                                    padding: 0 10px;
                                    margin: 5px 0;
                                `}
                            ></p>
                            <p
                                id="humidity"
                                className={css`
                                    padding: 0 10px;
                                    margin: 5px 0;
                                `}
                            ></p>
                            <p
                                id="precip"
                                className={css`
                                    padding: 0 10px;
                                    margin: 5px 0;
                                `}
                            ></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;
