import { css } from '@emotion/css';
import useAxiosCurrent from '~/service/currentApi';
import sunlight from '~/weatherBackground/light/sunlight.png';
import cloud4 from '~/weatherBackground/cloud/cloud4.png';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AirIcon from '@mui/icons-material/Air';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

const CurrentWeather = () => {
    const { current, location } = useAxiosCurrent();
    let checkObj = Object.keys(current).length === 0;
    if (checkObj === false) {
        return (
            <div>
                <h2
                    className={css`
                        color: #ffffff;
                    `}
                >
                    Weather
                </h2>
                <div
                    className={css`
                        width: 25%;
                        height: 100%;
                        background-color: #33c5ff;
                        background-image: url(${sunlight});
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: 70px;
                    `}
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
                            >{`${location.name}, ${location.country}`}</span>
                            <div
                                className={css`
                                    display: flex;
                                    color: #ffffff;
                                    justify-content: space-between;
                                `}
                            >
                                <div
                                    className={css`
                                        max-width: 40%;
                                    `}
                                >
                                    <div>
                                        <span
                                            className={css`
                                                font-size: 30px;
                                                margin: 5px 0;
                                            `}
                                        >
                                            {current.temp_c}
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
                                                font-size: 14px;
                                                text-overflow: ellipsis;
                                                overflow: hidden;
                                                display: -webkit-box;
                                                -webkit-box-orient: vertical;
                                                -webkit-line-clamp: 1;
                                            `}
                                        >
                                            {current.condition.text}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className={css`
                                        font-size: 14px;
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
                                            {current.feelslike_c}
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
                                        <span>{`${current.vis_km} km`}</span>
                                    </div>
                                </div>
                                <div
                                    className={css`
                                        font-size: 14px;
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
                                        <span>{`${current.wind_kph} km/h`}</span>
                                    </div>
                                    <div>
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
                                        <span>{`${current.humidity} %`}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
export default CurrentWeather;
