import * as moment from 'moment';
import { css } from '@emotion/css';
import useAxiosCurrent from '~/service/currentApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import AirIcon from '@mui/icons-material/Air';

const CurrentWeather = () => {
    const { current, location } = useAxiosCurrent();
    let checkObj = Object.keys(current).length === 0;

    if (checkObj === false) {
        return (
            <div>
                <div
                    className={css`
                        display: flex;
                        justify-items: center;
                        justify-content: center;
                        margin: 40px 0;
                        text-shadow: 1px 1px 3px #000;
                    `}
                >
                    <div>
                        <div
                            className={css`
                                text-align: center;
                            `}
                        >
                            <p id="location">{`${location.name}, ${location.country}`}</p>
                            <div
                                className={css`
                                    display: flex;
                                    justify-content: center;
                                    margin: 20px auto;
                                `}
                            >
                                <img alt="icon-weather" src={current.condition.icon}></img>
                                <p
                                    id="temp_c"
                                    className={css`
                                        font-weight: 300;
                                        font-size: 80px;
                                        margin: 0;
                                        line-height: 0.7;
                                    `}
                                >
                                    {current.temp_c}
                                </p>
                                <FontAwesomeIcon icon={faCircle} id="temp-icon" />
                            </div>
                            <p
                                id="condition"
                                className={css`
                                    margin: 5px 0;
                                `}
                            >
                                {current.condition.text}
                            </p>
                            <p
                                id="Updated"
                                className={css`
                                    margin: 5px 0;
                                `}
                            >
                                {`Updated as of ${moment(current.last_updated, 'YYYY-MM-DD hh:mm').format('hh:mm A')}`}
                            </p>
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
                                    >
                                        {`Feels Like ${current.feelslike_c} `}
                                    </p>
                                    <FontAwesomeIcon
                                        id="temp-icon"
                                        icon={faCircle}
                                        className={css`
                                            width: 5px;
                                        `}
                                    />
                                </span>
                                <div
                                    className={css`
                                        display: flex;
                                        align-content: center;
                                    `}
                                >
                                    <span>
                                        Wind <AirIcon fontSize="small" />
                                    </span>
                                    <span>
                                        <p
                                            id="wind"
                                            className={css`
                                                padding: 0 10px;
                                                margin: 5px 0;
                                            `}
                                        >
                                            {`${current.wind_kph} km/h`}
                                        </p>
                                    </span>
                                </div>
                                <p
                                    id="visibility"
                                    className={css`
                                        padding: 0 10px;
                                        margin: 5px 0;
                                    `}
                                >
                                    {`Visibility ${current.vis_km} km`}
                                </p>
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
                                >
                                    {`Barometer ${current.pressure_mb} mb`}
                                </p>
                                <p
                                    id="humidity"
                                    className={css`
                                        padding: 0 10px;
                                        margin: 5px 0;
                                    `}
                                >
                                    {`Humidity ${current.humidity}%`}
                                </p>
                                <p
                                    id="precip"
                                    className={css`
                                        padding: 0 10px;
                                        margin: 5px 0;
                                    `}
                                >
                                    {`Precipitation ${current.precip_mm} mm`}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default CurrentWeather;
