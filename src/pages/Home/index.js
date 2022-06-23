import { useEffect } from 'react';
import { Container } from '@mui/material';
import * as moment from 'moment';
import { css } from '@emotion/css';
import useAxiosCurrent from '~/service/currentApi';
import CurrentWeather from '~/components/current/currentWeather';
import DailyWeather from '~/components/Daily/index';
import mist from '~/weatherBackground/mist/mist-reverse.png';
import cloud from '~/weatherBackground/cloud/cloud.png';
import cloud5 from '~/weatherBackground/cloud/cloud5.png';
import cloud3 from '~/weatherBackground/cloud/cloud-3.png';
import light from '~/weatherBackground/light/light.png';
import rain4 from '~/weatherBackground/rain/rain4.png';
import cloudThunder from '~/weatherBackground/cloud/cloud-thunder.png';

import thunder from '~/weatherBackground/lightning/thunder.png';

const Forecast = (props) => {
    const { current, condition } = useAxiosCurrent();
    useEffect(() => {
        // parseInt(moment().format('hh')) < 7 && moment().format('AA') === 'PM'
        //     ? (document.getElementById('themeColor').style.backgroundColor = '#3171af')
        //     : (document.getElementById('themeColor').style.backgroundColor = '#ffffff');

        if (condition === 'Light rain') {
            document.getElementById('cloud').style.backgroundImage = `url(${cloud5})`;
            document.getElementById('cloud').style.backgroundPositionY = 'top';
            document.getElementById('light-rain').style.backgroundImage = `url(${rain4})`;
        } else if (condition === 'Mist') {
            document.getElementById('mist').style.backgroundImage = `url(${mist})`;
        } else if (condition === 'Partly cloudy') {
            document.getElementById('light').style.backgroundImage = `url(${light})`;
            document.getElementById('cloud').style.backgroundImage = `url(${cloud})`;
        } else if (condition === 'Sunny') {
            document.getElementById('light').style.backgroundImage = `url(${light})`;
        } else if (condition === 'Clear') {
            document.getElementById('cloud').style.backgroundImage = `url(${cloud3})`;
            document.getElementById('cloud').style.backgroundPositionY = 'top';
        } else if (condition === 'Moderate or heavy rain with thunder') {
            document.getElementById('light-rain').style.backgroundImage = `url(${rain4})`;
            document.getElementById('cloud').style.backgroundImage = `url(${cloud})`;
            document.getElementById('thunder').style.backgroundImage = `url(${thunder})`;
        } else if (condition === 'Patchy light rain with thunder') {
            document.getElementById('cloud').style.backgroundPositionY = 'top';
            document.getElementById('cloud').style.backgroundImage = `url(${cloudThunder})`;
            document.getElementById('thunder').style.backgroundImage = `url(${thunder})`;
        } else if (condition === 'Thundery outbreaks possible') {
            document.getElementById('cloud').style.backgroundPositionY = 'top';
            document.getElementById('cloud').style.backgroundImage = `url(${cloudThunder})`;
            // document.getElementById('thunder').style.backgroundImage = `url(${thunder})`;
        }
    }, [current, condition]);
    return (
        <div
            id="themeColor"
            className={
                (6 < parseInt(moment().format('hh')) < 12 && moment().format('AA') === 'AM') ||
                (1 < parseInt(moment().format('hh')) < 7 && moment().format('AA') === 'PM')
                    ? css`
                          background-color: #3171af;
                          font-family: 'Inter', sans-serif;
                          color: #ffffff;
                          text-shadow: 2px 2px 5px #000000;
                          height: 1080px;
                      `
                    : css`
                          background-color: #0b2642;
                          font-family: 'Inter', sans-serif;
                          color: #ffffff;
                          text-shadow: 2px 2px 5px #000000;
                          min-height: 1080px;
                      `
            }
        >
            <div
                id="light"
                className={css`
                    background-repeat: no-repeat;
                    background-position-x: right;
                    background-size: contain;
                `}
            >
                <div
                    id="light-rain"
                    className={css`
                        background-repeat: no-repeat;
                        background-size: contain;
                        background-position: center top;
                    `}
                >
                    <div
                        id="cloud"
                        className={css`
                            background-repeat: no-repeat;
                            background-position-x: center;
                            background-size: contain;
                            background-position-y: 100px;
                        `}
                    >
                        <div
                            id="thunder"
                            className={css`
                                background-repeat: no-repeat;
                                background-position: right top;
                            `}
                        >
                            <div
                                id="mist"
                                className={css`
                                    background-size: contain;
                                    background-repeat: no-repeat;
                                `}
                            >
                                <Container>
                                    <CurrentWeather />
                                    <DailyWeather />
                                </Container>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forecast;
