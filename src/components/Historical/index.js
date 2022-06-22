import { css } from '@emotion/css';
import * as moment from 'moment';
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import useAxiosHistory from '~/service/history';
import ChartBar from '../Chart';
import { set_historical } from '~/features/Historical';
import { set_chart } from '~/features/SwapChart';

const Historical = () => {
    const { fore, location } = useAxiosHistory();
    const dispatch = useDispatch();
    const data = fore.map((time) => {
        return time.hour.map((hour) => {
            return { x: moment(hour.time, 'YYYY-MM-DD hh:mm').format('hh A'), y: `${hour.temp_c.toFixed(0)}` };
        });
    });

    if (data.length > 0) {
        return (
            <div
                className={css`
                    width: 1920px;
                    height: 1080px;
                    background-color: #222121;
                    font-family: 'Manrope', sans-serif !important;
                `}
            >
                <Container>
                    <div
                        className={css`
                            padding: 10px 0;
                            margin: 30px 0 0 30px;
                        `}
                    >
                        <div
                            className={css`
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                            `}
                        >
                            <div>
                                <h2
                                    className={css`
                                        color: #ffffff;
                                    `}
                                >{`${location.name}, ${location.country}`}</h2>
                            </div>
                            <div
                                className={css`
                                    display: flex;
                                    justify-content: flex-end;
                                `}
                            >
                                <div
                                    className={css`
                                        padding: 0 5px;
                                    `}
                                >
                                    <button
                                        onClick={() => dispatch(set_chart(true))}
                                        className={css`
                                            font-family: 'Manrope', sans-serif;
                                            border: 0px solid #ffffff9e;
                                            border-radius: 0px;
                                            padding: 5px;
                                            background-color: #ffffff9e;
                                            margin: 0 5px;
                                            &:active {
                                                background-color: #ffffff;
                                            }
                                        `}
                                    >
                                        Temperature
                                    </button>
                                </div>
                                <div
                                    className={css`
                                        padding: 0 5px;
                                    `}
                                >
                                    <button
                                        onClick={() => dispatch(set_chart(false))}
                                        className={css`
                                            font-family: 'Manrope', sans-serif;
                                            border: 0px solid #ffffff9e;
                                            border-radius: 0px;
                                            padding: 5px;
                                            background-color: #ffffff9e;
                                            margin: 0 5px;
                                            &:active {
                                                background-color: #ffffff;
                                            }
                                        `}
                                    >
                                        Humidity
                                    </button>
                                </div>
                            </div>
                        </div>
                        <ChartBar />

                        <div>
                            <select
                                onChange={(e) => dispatch(set_historical(e.target.value))}
                                className={css`
                                    padding: 5px;
                                    width: 200px;
                                    border: none;
                                    font-family: 'Manrope', sans-serif;
                                `}
                            >
                                <option value={moment().format('DD')} defaultValue>{`${parseInt(
                                    moment().format('DD'),
                                )} / ${moment().format('MM')} / ${moment().format('YYYY')}`}</option>
                                <option value={parseInt(moment().format('DD')) - 1}>{`${
                                    parseInt(moment().format('DD')) - 1
                                } / ${moment().format('MM')}  / ${moment().format('YYYY')}`}</option>
                                <option value={parseInt(moment().format('DD')) - 2}>{`${
                                    parseInt(moment().format('DD')) - 2
                                } / ${moment().format('MM')}  / ${moment().format('YYYY')}`}</option>
                                <option value={parseInt(moment().format('DD')) - 3}>{`${
                                    parseInt(moment().format('DD')) - 3
                                } / ${moment().format('MM')}  / ${moment().format('YYYY')}`}</option>
                                <option value={parseInt(moment().format('DD')) - 4}>{`${
                                    parseInt(moment().format('DD')) - 4
                                } / ${moment().format('MM')}  / ${moment().format('YYYY')}`}</option>
                                <option value={parseInt(moment().format('DD')) - 5}>{`${
                                    parseInt(moment().format('DD')) - 5
                                } / ${moment().format('MM')}  / ${moment().format('YYYY')}`}</option>
                                <option value={parseInt(moment().format('DD')) - 6}>{`${
                                    parseInt(moment().format('DD')) - 6
                                } / ${moment().format('MM')}  / ${moment().format('YYYY')}`}</option>
                            </select>
                        </div>
                        <div
                            className={css`
                                margin: 10px 0;
                                color: #ffffff;
                            `}
                        >
                            <div
                                className={css`
                                    display: flex;
                                    justify-content: space-between;
                                `}
                            >
                                <div>
                                    <h3>Nhiệt độ cao nhât</h3>
                                    <p>{fore[0].day.maxtemp_c}</p>
                                </div>
                                <div>
                                    <h3>Tốc độ gió cao nhất</h3>
                                    <p>{`${fore[0].day.maxwind_kph} km/h`}</p>
                                </div>
                                <div>
                                    <h3>Độ ẩm trung bình</h3>
                                    <p>{`${fore[0].day.avghumidity} %`}</p>
                                </div>
                            </div>
                            <div
                                className={css`
                                    display: flex;
                                    justify-content: space-between;
                                `}
                            >
                                <div>
                                    <h3>Nhiệt độ thấp nhất</h3>
                                    <p>{fore[0].day.mintemp_c}</p>
                                </div>
                                <div>
                                    <h3>Tầm nhìn trung bình</h3>
                                    <p>{`${fore[0].day.avgvis_km} km/h`}</p>
                                </div>
                                <div
                                    className={css`
                                        opacity: 0;
                                    `}
                                >
                                    <h3>Độ ẩm trung bình</h3>
                                    <p>{`${fore[0].day.avghumidity} %`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
};
export default Historical;
