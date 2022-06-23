import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/css';
import Divider from '@mui/material/Divider';
import useAxios from '~/service/forecast';
import { VictoryPie } from 'victory';
import Thermometer from 'react-thermometer-component';
import '../DayDetail/index.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import NightlightIcon from '@mui/icons-material/Nightlight';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import CircleIcon from '@mui/icons-material/Circle';
import Brightness2Icon from '@mui/icons-material/Brightness2';

const DayDetail = () => {
    const { data } = useAxios();
    const [moonQuarter, setMoonQuarter] = useState('grey');
    const [fullMoon, setFullMoon] = useState('grey');
    const [newMoon, setNewMoon] = useState('grey');
    const [waxingCrescent, setWaxingCrescent] = useState('grey');
    const showDetail = useSelector((state) => state.hourly.dataHour);

    useEffect(() => {
        setTimeout(() => {
            if (showDetail === 0) {
                document.getElementById('detail-0').style.display = 'block';
                document.getElementById('detail-1').style.display = 'none';
                document.getElementById('detail-2').style.display = 'none';
            } else if (showDetail === 1) {
                document.getElementById('detail-0').style.display = 'none';
                document.getElementById('detail-1').style.display = 'block';
                document.getElementById('detail-2').style.display = 'none';
            } else if (showDetail === 2) {
                document.getElementById('detail-0').style.display = 'none';
                document.getElementById('detail-1').style.display = 'none';
                document.getElementById('detail-2').style.display = 'block';
            }
            switch (data.length > 0) {
                case data[showDetail].astro.moon_phase === 'Waning Gibbous':
                    setMoonQuarter('#ffffff');
                    break;
                case data[showDetail].astro.moon_phase === 'Last Quarter':
                    setMoonQuarter('#ffffff');
                    break;
                case data[showDetail].astro.moon_phase === 'Full Moon':
                    setFullMoon('#ffffff');
                    break;
                case data[showDetail].astro.moon_phase === 'New Moon':
                    setNewMoon('#ffffff');
                    break;

                case data[showDetail].astro.moon_phase === 'Waxing Crescent':
                    setWaxingCrescent('#ffffff');
                    break;
                default:
                    setMoonQuarter('#ffffff');
                    break;
            }
        }, 150);
    }, [showDetail, data]);
    return (
        <div
            className={css`
                text-shadow: 1px 1px 2px #000000;
            `}
        >
            <h2>Day Detail</h2>
            {data.map((detail, index) => (
                <div key={index} id={`detail-${index}`}>
                    <div className="detail">
                        <div className="detail-forecast">
                            <Divider
                                component="div"
                                className={css`
                                    border-color: #ffffff9e !important;
                                `}
                            />
                            <h4>All Day</h4>
                            <p>{`Weather forecast will happen is ${detail.day.condition.text}. The high will be ${detail.day.maxtemp_c} and the low will be ${detail.day.mintemp_c}`}</p>
                        </div>
                        <div className="detail-sunrise">
                            <Divider
                                component="div"
                                className={css`
                                    border-color: #ffffff9e !important;
                                `}
                            />
                            <div>
                                <h4>Sunrise</h4>
                                <div>
                                    <span
                                        className={css`
                                            position: relative;
                                            top: 5px;
                                        `}
                                    >
                                        <WbSunnyIcon />
                                    </span>
                                    <span
                                        className={css`
                                            font-size: 20px;
                                        `}
                                    >
                                        {' '}
                                        {detail.astro.sunrise}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h4>Sunset</h4>
                                <div>
                                    <span
                                        className={css`
                                            position: relative;
                                            top: 4px;
                                        `}
                                    >
                                        <WbTwilightIcon />
                                    </span>
                                    <span
                                        className={css`
                                            font-size: 20px;
                                        `}
                                    >
                                        {' '}
                                        {detail.astro.sunset}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="detail-moonrise">
                            <Divider
                                component="div"
                                className={css`
                                    border-color: #ffffff9e !important;
                                `}
                            />

                            <div>
                                <h4>Moonrise</h4>
                                <div>
                                    <span
                                        className={css`
                                            position: relative;
                                            top: 4px;
                                        `}
                                    >
                                        <ModeNightIcon />
                                    </span>
                                    <span
                                        className={css`
                                            font-size: 20px;
                                            margin-left: 5px;
                                        `}
                                    >
                                        {detail.astro.moonrise}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h4>Moonset</h4>
                                <div>
                                    <span
                                        className={css`
                                            position: relative;
                                            top: 4px;
                                        `}
                                    >
                                        <Brightness4Icon />
                                    </span>
                                    <span
                                        className={css`
                                            font-size: 20px;
                                            margin-left: 2px;
                                        `}
                                    >
                                        {' '}
                                        {detail.astro.moonset}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h4>Moon Phase</h4>
                                <div
                                    className={css`
                                        color: grey;
                                    `}
                                >
                                    <Brightness2Icon style={{ color: waxingCrescent }} />
                                    <CircleIcon style={{ color: fullMoon }} />
                                    <NightlightIcon style={{ color: moonQuarter }} />
                                    <NightlightRoundIcon style={{ color: newMoon }} />
                                </div>
                                <p>{detail.astro.moon_phase}</p>
                            </div>
                        </div>
                        <div className="detail-chart">
                            <Divider
                                component="div"
                                className={css`
                                    border-color: #ffffff9e !important;
                                `}
                            />
                            <div
                                className={css`
                                    display: grid;
                                    grid-template-columns: 1fr 1fr;
                                    grid-auto-rows: 1fr 1fr;
                                    & tspan {
                                        display: none;
                                    }
                                `}
                            >
                                <div>
                                    <div
                                        className={css`
                                            display: flex;
                                            align-items: center;
                                        `}
                                    >
                                        <h4>Precipitation</h4>
                                        <span
                                            className={css`
                                                margin-left: 5px;
                                            `}
                                        >
                                            (mm/day)
                                        </span>
                                    </div>
                                    <div>
                                        <p
                                            className={css`
                                                position: absolute;
                                                margin-left: 82px;
                                                margin-top: 50px;
                                                font-size: 25px;
                                            `}
                                        >
                                            {detail.day.totalprecip_mm}
                                        </p>
                                        <svg
                                            className={css`
                                                margin-top: -35px;
                                            `}
                                        >
                                            <VictoryPie
                                                standalone={false}
                                                width={200}
                                                height={200}
                                                innerRadius={40}
                                                data={[
                                                    {
                                                        x: '',
                                                        y: detail.day.totalprecip_mm,
                                                        fill: '#33c5ff',
                                                    },
                                                    { x: '', y: 100 },
                                                ]}
                                                colorScale={['#33c5ff', '#ffffff']}
                                                style={{
                                                    labels: {
                                                        fill: '#ffffff',
                                                    },
                                                }}
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h4>Humidity</h4>
                                    <div>
                                        <p
                                            className={css`
                                                position: absolute;
                                                margin-left: 75px;
                                                margin-top: 50px;
                                                font-size: 25px;
                                            `}
                                        >
                                            {`${detail.day.avghumidity}%`}
                                        </p>
                                        <svg
                                            className={css`
                                                margin-top: -35px;
                                            `}
                                        >
                                            <VictoryPie
                                                standalone={false}
                                                width={200}
                                                height={200}
                                                innerRadius={40}
                                                data={[
                                                    { x: '', y: detail.day.avghumidity, fill: '#33c5ff' },
                                                    { x: '', y: 15 },
                                                ]}
                                                colorScale={['#33c5ff', '#ffffff']}
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h4>UV index</h4>
                                    <div>
                                        <p
                                            className={css`
                                                position: absolute;
                                                margin-left: 90px;
                                                margin-top: 50px;
                                                font-size: 25px;
                                            `}
                                        >
                                            {detail.day.uv}
                                        </p>

                                        <svg
                                            className={css`
                                                margin-top: -35px;
                                            `}
                                        >
                                            <VictoryPie
                                                standalone={false}
                                                width={200}
                                                height={200}
                                                innerRadius={40}
                                                data={[
                                                    { x: '', y: detail.day.uv, fill: '#33c5ff' },
                                                    { x: '', y: 10 },
                                                ]}
                                                colorScale={['#33c5ff', '#ffffff']}
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        className={css`
                                            display: flex;
                                            align-items: center;
                                        `}
                                    >
                                        <h4>Max Wind</h4>{' '}
                                        <span
                                            className={css`
                                                margin-left: 5px;
                                            `}
                                        >
                                            (km/h)
                                        </span>
                                    </div>
                                    <div>
                                        <p
                                            className={css`
                                                position: absolute;
                                                margin-left: 75px;
                                                margin-top: 50px;
                                                font-size: 25px;
                                            `}
                                        >
                                            {detail.day.maxwind_kph}
                                        </p>
                                        <svg
                                            className={css`
                                                margin-top: -35px;
                                            `}
                                        >
                                            <VictoryPie
                                                standalone={false}
                                                width={200}
                                                height={200}
                                                innerRadius={40}
                                                data={[
                                                    { x: '', y: detail.day.maxwind_kph, fill: '#33c5ff' },
                                                    { x: '', y: 100 },
                                                ]}
                                                colorScale={['#33c5ff', '#ffffff']}
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="detail-precip">
                            <Divider
                                component="div"
                                className={css`
                                    border-color: #ffffff9e !important;
                                `}
                            />
                            <h4>Precipitation</h4>
                            <p>Precipitation amount in inches: {detail.day.totalprecip_in} inches</p>
                            <p>Precipitation amount in millimeters: {detail.day.totalprecip_mm} millimeters</p>
                        </div>
                        <div className="detail-temperature">
                            <Divider
                                component="div"
                                className={css`
                                    border-color: #ffffff9e !important;
                                `}
                            />
                            <h4>Temperature</h4>
                            <Thermometer
                                theme="light"
                                value={detail.day.avgtemp_c}
                                max="100"
                                steps="2"
                                format="°C"
                                size="small"
                                height="200"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default DayDetail;
