// import axios from 'axios';
import useAxios from '~/service/forecast';
import Divider from '@mui/material/Divider';
import * as moment from 'moment';
import { css } from '@emotion/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet, faWind } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { VictoryChart, VictoryArea, VictoryAxis } from 'victory';
import { set_chartHourly } from '~/features/SwapHourly';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import ListAltIcon from '@mui/icons-material/ListAlt';

const HourlyWeather = () => {
    const { data } = useAxios();
    let dataChart = data.map((result) => {
        return result.hour.map((temp) => {
            return {
                x: moment(temp.time, 'YYYY-MM-DD hh:mm').format('hh A'),
                y: temp.temp_c,
            };
        });
    });
    const showHourly = useSelector((state) => state.hourly.data);
    const swapChart = useSelector((state) => state.chartHourly.value);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            if (showHourly === 0) {
                document.getElementById('hour-0').style.display = 'flex';
                document.getElementById('hour-1').style.display = 'none';
                document.getElementById('hour-2').style.display = 'none';
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
        }, 130);
    }, [showHourly]);

    const settings = {
        dots: false,
        infinity: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScoll: 3,
        arrow: true,
    };

    return (
        <div>
            <div
                className={css`
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                `}
            >
                <div>
                    <h2>Hourly</h2>
                </div>
                <div>
                    <button
                        onClick={() => dispatch(set_chartHourly(false))}
                        className={css`
                            border: 0px solid #ffffff9e;
                            border-radius: 0px;
                            padding: 5px 5px 12px 5px;
                            background-color: #ffffff9e;
                            margin: 0 5px;
                            &:active {
                                background-color: #ffffff;
                        `}
                    >
                        <span
                            className={css`
                                position: relative;
                                top: 5px;
                            `}
                        >
                            <InsertChartIcon fontSize="small" />
                        </span>
                        <span>Summary</span>
                    </button>
                    <button
                        onClick={() => dispatch(set_chartHourly(true))}
                        className={css`
                            border: 0px solid #ffffff9e;
                            border-radius: 0px;
                            padding: 5px 5px 12px 5px;
                            background-color: #ffffff9e;
                            margin: 0 5px;
                            &:active {
                                background-color: #ffffff;
                            }
                        `}
                    >
                        <span
                            className={css`
                                position: relative;
                                top: 5px;
                            `}
                        >
                            <ListAltIcon fontSize="small" />
                        </span>
                        <span>Detail</span>
                    </button>
                </div>
            </div>
            <Divider
                component="div"
                className={css`
                    border-color: #ffffff9e !important;
                `}
            />
            <div
                className={css`
                    display: flex;
                    justify-content: flex-start;
                    cursor: pointer;
                    margin-top: 10px;
                `}
            >
                {swapChart === true ? (
                    data.map((hour, index) => (
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
                                            key={index}
                                            className={css`
                                                padding-left: 0;
                                                margin: 0 20px;
                                                width: 200px;
                                                text-shadow: 2px 2px 5px #000000;
                                            `}
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
                                            <div>
                                                {hours.temp_c}
                                                <CircleOutlinedIcon
                                                    fontSize="small"
                                                    className={css`
                                                        position: absolute;
                                                        width: 8px !important;
                                                        height: 8px !important;
                                                        margin: 0 3px;
                                                    `}
                                                />
                                            </div>
                                            <div
                                                className={css`
                                                    font-size: 12px;

                                                    -o-text-overflow: ellipsis;
                                                    text-overflow: ellipsis;
                                                    overflow: hidden;
                                                    display: -webkit-box;
                                                    -webkit-box-orient: vertical;
                                                    -webkit-line-clamp: 1;
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
                                                {moment(hours.time, 'YYYY-MM-DD hh:mm').format('hh A')}
                                            </div>
                                        </div>
                                    );
                                })}
                            </Slider>
                        </div>
                    ))
                ) : (
                    <VictoryChart
                        height={200}
                        width={1100}
                        className={css`
                            font-size: 5px;
                        `}
                        // dependentAxis={false}
                    >
                        <VictoryArea
                            style={{
                                data: {
                                    fill: '#ffffff5e',
                                    fillOpacity: 0.7,
                                },
                                labels: {
                                    fontSize: 15,
                                    fill: '#ffffff',
                                },
                                text: {
                                    fill: '#ffffff !important',
                                    fontSize: '12px !important',
                                    textTransform: 'lowercase',
                                },
                            }}
                            data={dataChart[showHourly]}
                            labels={({ datum }) => datum.y}
                        />

                        <VictoryAxis />
                    </VictoryChart>
                )}
            </div>
        </div>
    );
};
export default HourlyWeather;
