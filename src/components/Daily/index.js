import { useSelector } from 'react-redux';
import { css } from '@emotion/css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as moment from 'moment';
import useAxios from '~/service/forecast';
import { get_hour } from '~/features/Hourly';
import { set_api } from '~/features/DailyWeather';
import { set_daily } from '~/features/activeDaily';
import HourlyWeather from '~/components/Hourly/index';
import DayDetail from '~/components/DayDetail/index';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import '../Daily/daily.css';

const DailyWeather = () => {
    const dispatch = useDispatch();
    const daily = useSelector((state) => state.daily.show);
    const activeDaily = useSelector((state) => state.activeDaily.daily);
    const { data } = useAxios();

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
                {data.map((fore, index) => (
                    <div
                        key={index}
                        className={
                            activeDaily === index
                                ? css`
                                      padding: 20px;
                                      margin: 5px;
                                      width: 150px;
                                      border: 2px solid #ffffff5e;
                                      text-shadow: 1px 1px 2px #000000;
                                      background-color: #ffffff5e;

                                      &:hover {
                                          border: 2px solid #ffffff;
                                          background-color: #ffffff;
                                      }
                                      &:active {
                                          background-color: #ffffff5e;
                                      }
                                  `
                                : css`
                                      padding: 20px;
                                      margin: 5px;
                                      width: 150px;
                                      border: 2px solid #ffffff00;
                                      text-shadow: 1px 1px 2px #000000;

                                      &:hover {
                                          border: 2px solid #ffffff;
                                          background-color: #ffffff;
                                      }
                                      &:active {
                                          background-color: #ffffff5e;
                                      }
                                  `
                        }
                        onClick={() => {
                            dispatch(get_hour(index));
                            dispatch(set_api(index));
                            dispatch(set_daily(index));
                        }}
                        id={`daily-${index}`}
                    >
                        <ul
                            className={css`
                                list-style: none;
                                padding-left: 0px;
                            `}
                        >
                            <li>{moment(fore.date, 'YYYY-MM-DD').format('ddd D')}</li>
                            <li>
                                <img src={fore.day.condition.icon} alt="icon-forecast"></img>
                            </li>
                            <li>
                                <span
                                    className={css`
                                        margin: 0 10px 0 5px;
                                        font-weight: bold;
                                        font-size: 16px;
                                    `}
                                >
                                    {fore.day.maxtemp_c}
                                    <CircleOutlinedIcon
                                        fontSize="small"
                                        className={css`
                                            position: absolute;
                                            width: 10px !important;
                                            height: 10px !important;
                                        `}
                                    />
                                </span>
                                <span
                                    className={css`
                                        margin: 0 5px;
                                        font-size: 14px;
                                        opacity: 0.5;
                                    `}
                                >
                                    {fore.day.mintemp_c}
                                    <CircleOutlinedIcon
                                        fontSize="small"
                                        className={css`
                                            position: absolute;
                                            width: 7px !important;
                                            height: 7px !important;
                                        `}
                                    />
                                </span>
                            </li>
                            <li>{fore.day.condition.text}</li>
                        </ul>
                    </div>
                ))}
            </div>
            <HourlyWeather />
            <DayDetail />
        </div>
    );
};
export default DailyWeather;
