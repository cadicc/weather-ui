// import axios from 'axios';
import { css } from '@emotion/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet, faWind } from '@fortawesome/free-solid-svg-icons';
import Divider from '@mui/material/Divider';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

const HourlyWeather = (forecastApi) => {
    const hourly = forecastApi.daily;
    const showHourly = useSelector((state) => state.hourly.data);
    useEffect(() => {
        setTimeout(() => {
            if (showHourly === 0) {
                document.getElementById('hour-0').style.display = 'flex';
                document.getElementById('hour-1').style.display = 'none';
                document.getElementById('hour-2').style.display = 'none';
                console.log(showHourly);
            } else if (showHourly === 1) {
                document.getElementById('hour-0').style.display = 'none';
                document.getElementById('hour-1').style.display = 'flex';
                document.getElementById('hour-2').style.display = 'none';
            } else if (showHourly === 2) {
                document.getElementById('hour-0').style.display = 'none';
                document.getElementById('hour-1').style.display = 'none';
                document.getElementById('hour-2').style.display = 'flex';
            } else {
                document.getElementById('hour-0').style.display = 'flex';
                document.getElementById('hour-1').style.display = 'none';
                document.getElementById('hour-2').style.display = 'none';
            }
        }, 110);
    }, [showHourly]);

    const settings = {
        dots: false,
        infinity: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScoll: 5,
        arrow: true,
    };

    return (
        <div>
            <h2>Hourly</h2>
            {/* <Slider {...settings}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Slider> */}
            <Divider component="div" />
            <div
                className={css`
                    display: flex;
                    justify-content: flex-start;
                    cursor: pointer;
                `}
            >
                {hourly.map((hour, index) => (
                    <div
                        id={`hour-${index}`}
                        key={index}
                        className={css`
                            padding: 5px 10px;
                            padding-left: 0;
                            display: flex;
                            flex-flow: row;
                            // background-color: #f3f3f3;
                            margin: 0 20px;
                            margin-left: 0;
                            width: 100%;
                        `}
                    >
                        <Slider
                            {...settings}
                            className={css`
                                width: 100%;
                            `}
                        >
                            {hour.hour.map((hours, index) => {
                                return (
                                    <div
                                        //
                                        key={index}
                                        className={css`
                                            list-style: none;
                                            padding-left: 0;
                                            margin: 0 20px;
                                            width: 150px;
                                        `}
                                        id={`hourly-${index}`}
                                    >
                                        <div>
                                            <img
                                                src={hours.condition.icon}
                                                alt="icon-hours"
                                                className={css`
                                                    width: 50px;
                                                    height: 50px;
                                                `}
                                            />
                                        </div>
                                        <div>{hours.temp_c}</div>
                                        <div
                                            className={css`
                                                font-size: 12px;
                                            `}
                                        >
                                            {hours.condition.text}
                                        </div>
                                        <div
                                            className={css`
                                                margin-top: 20px;
                                                font-size: 12px;
                                            `}
                                        >
                                            <span>{<FontAwesomeIcon icon={faDroplet} />}</span>
                                            <span
                                                className={css`
                                                    margin-left: 10px;
                                                `}
                                            >{`${hours.chance_of_rain} %`}</span>
                                        </div>
                                        <div
                                            className={css`
                                                font-size: 12px;
                                            `}
                                        >
                                            <span>{<FontAwesomeIcon icon={faWind} />}</span>
                                            <span
                                                className={css`
                                                    margin-left: 10px;
                                                `}
                                            >{`${hours.wind_kph} km/h`}</span>
                                        </div>
                                        <div
                                            className={css`
                                                margin-top: 20px;
                                                font-size: 12px;
                                                font-weight: bold;
                                            `}
                                        >
                                            {hours.time}
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default HourlyWeather;
