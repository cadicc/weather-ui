import axios from 'axios';
import { useSelector } from 'react-redux';
import { css } from '@emotion/css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { get_hour } from '~/features/Hourly';
import HourlyWeather from '~/components/Hourly/index';
import DayDetail from '~/components/DayDetail/index';
import '../Daily/daily.css';

const DailyWeather = () => {
    const dispatch = useDispatch();
    const weather = useSelector((state) => state.weather.value);
    const daily = useSelector((state) => state.hourly.dataHour);
    const [forecastApi, setForecastApi] = useState([]);
    const [hourly, setHourly] = useState(forecastApi);
    // console.log(daily);
    useEffect(() => {
        axios
            .get(`https://api.weatherapi.com/v1/forecast.json?key=f0106112791a4d5486c104334223105&`, {
                params: {
                    q: weather,
                    days: 10,
                    aqi: 'yes',
                    alerts: 'no',
                },
            })
            .then(function (res) {
                console.log(typeof res);
                setForecastApi(res.data.forecast.forecastday);
                setHourly(res.data.forecast);
            });
    }, []);

    return (
        <div>
            <h2>Daily</h2>
            <div
                className={css`
                    display: flex;
                    justify-content: flex-start;
                    margin: 5px 0;
                `}
            >
                {forecastApi.map((fore, index) => (
                    <div
                        key={index}
                        className={css`
                            padding: 20px;
                            margin: 5px;
                            width: 200px;
                        `}
                        onClick={() => dispatch(get_hour(index))}
                        id={`daily-${index}`}
                    >
                        <ul
                            className={css`
                                list-style: none;
                                padding-left: 0px;
                            `}
                        >
                            <li>{fore.date}</li>
                            <li>
                                <img src={fore.day.condition.icon} alt="icon-forecast"></img>
                            </li>
                            <li>
                                <span
                                    className={css`
                                        margin: 0 5px;
                                        font-weight: bold;
                                        font-size: 16px;
                                    `}
                                >
                                    {fore.day.maxtemp_c}
                                </span>
                                <span
                                    className={css`
                                        margin: 0 5px;
                                        font-size: 14px;
                                        opacity: 0.5;
                                    `}
                                >
                                    {fore.day.mintemp_c}
                                </span>
                            </li>
                            <li>{fore.day.condition.text}</li>
                        </ul>
                    </div>
                ))}
            </div>
            <HourlyWeather daily={forecastApi} />
            <DayDetail detail={hourly} />
        </div>
    );
};
export default DailyWeather;
