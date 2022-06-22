import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faChartArea, faStar } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { SWITCH_HOME, SWITCH_HISTORICAL, SWITCH_FAVORITES } from '~/features/Switch';
import { set_activeHome, set_activeHis, set_activeFav } from '~/features/activeNavBar/activeHome';
import { css } from '@emotion/css';

export const listLink = ['/', '/historical-weather'];

const NavBar = () => {
    const dispatch = useDispatch();
    const swap = useSelector((state) => state.swap.status);
    const activeHome = useSelector((state) => state.activeNav.home);
    const activeHis = useSelector((state) => state.activeNav.history);
    const activeFav = useSelector((state) => state.activeNav.favorite);

    const handleClickHome = () => {
        dispatch(SWITCH_HOME());
        dispatch(set_activeHome(true));
        dispatch(set_activeHis(false));
        dispatch(set_activeFav(false));
    };
    const handleClickHis = () => {
        dispatch(SWITCH_HISTORICAL());
        dispatch(set_activeHis(true));
        dispatch(set_activeHome(false));
        dispatch(set_activeFav(false));
    };
    const handleClickFav = () => {
        dispatch(SWITCH_FAVORITES());
        dispatch(set_activeFav(true));
        dispatch(set_activeHome(false));
        dispatch(set_activeHis(false));
    };

    return (
        <div>
            {swap ? (
                <div
                    className={css`
                position: fixed;
                display: flex;
                height: 95%;
                width: 3%;
                left: 0;
                bottom: 0;
                background-color: #1f1f1f;
                }
            `}
                >
                    <div
                        className={css`
                            width: 100%;
                        `}
                    >
                        <Link to={listLink[0]} onClick={handleClickHome}>
                            <div
                                className={css`
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            padding: 10px 5px;
                            &:hover {
                                background-color: #ffffff5e;
                        `}
                            >
                                <span>
                                    <IconButton aria-label="Home" size="small">
                                        <FontAwesomeIcon
                                            icon={faHouse}
                                            inverse
                                            className={css`
                                                padding: 0 5px;
                                            `}
                                        />
                                    </IconButton>
                                </span>
                                {activeHome ? (
                                    <span
                                        className={css`
                                            position: absolute;
                                            width: 8%;
                                            height: 48px;
                                            top: 0;
                                            left: 0;
                                            background-color: #239df2;
                                        `}
                                    ></span>
                                ) : (
                                    <span></span>
                                )}
                            </div>
                        </Link>
                        <Link to="/historical-weather" onClick={handleClickHis}>
                            <div
                                className={css`
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            padding: 10px 5px;
                            &:hover {
                                background-color: #ffffff5e;
                        `}
                            >
                                <span>
                                    <IconButton
                                        aria-label="Historical Weather"
                                        size="small"
                                        className={css`
                                            padding: 0 5px;
                                        `}
                                    >
                                        <FontAwesomeIcon
                                            icon={faChartArea}
                                            inverse
                                            className={css`
                                                padding: 0 5px;
                                            `}
                                        />
                                    </IconButton>
                                </span>
                                {activeHis ? (
                                    <span
                                        className={css`
                                            position: absolute;
                                            width: 8%;
                                            height: 48px;
                                            top: 48px;
                                            left: 0;
                                            background-color: #239df2;
                                        `}
                                    ></span>
                                ) : (
                                    <span></span>
                                )}
                            </div>
                        </Link>
                        <Link to="/favorites" onClick={handleClickFav}>
                            <div
                                className={css`
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            padding: 10px 5px;
                            &:hover {
                                background-color: #ffffff5e;
                        `}
                            >
                                <span>
                                    <IconButton
                                        aria-label="Favorites"
                                        size="small"
                                        className={css`
                                            padding: 0 5px;
                                        `}
                                    >
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            inverse
                                            className={css`
                                                padding: 0 5px;
                                            `}
                                        />
                                    </IconButton>
                                </span>
                                {activeFav ? (
                                    <span
                                        className={css`
                                            position: absolute;
                                            width: 8%;
                                            height: 48px;
                                            top: 96px;
                                            left: 0;
                                            background-color: #239df2;
                                        `}
                                    ></span>
                                ) : (
                                    <span></span>
                                )}
                            </div>
                        </Link>
                    </div>
                </div>
            ) : (
                <div
                    className={css`
                position: fixed;
                display: flex;
                height: 95%;
                width: 10%;
                left: 0;
                bottom: 0;
                background-color: #1f1f1f;
                }
            `}
                >
                    <div
                        className={css`
                            width: 100%;
                        `}
                    >
                        <Link
                            to={listLink[0]}
                            onClick={handleClickHome}
                            className={css`
                                text-decoration: none;
                            `}
                        >
                            <div
                                className={css`
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            padding: 10px 5px;
                            &:hover {
                                background-color: #ffffff5e;
                        `}
                            >
                                {activeHome ? (
                                    <span
                                        className={css`
                                            position: absolute;
                                            width: 2%;
                                            height: 48px;
                                            top: 0;
                                            left: 0;
                                            background-color: #239df2;
                                        `}
                                    ></span>
                                ) : (
                                    <span></span>
                                )}
                                <span>
                                    <IconButton aria-label="Home" size="small">
                                        <FontAwesomeIcon
                                            icon={faHouse}
                                            inverse
                                            className={css`
                                                padding: 0 5px;
                                            `}
                                        />
                                    </IconButton>
                                </span>
                                <span
                                    className={css`
                                        margin-left: 10px;
                                        color: #fff;
                                        font-weight: bold;
                                    `}
                                >
                                    Forecast
                                </span>
                            </div>
                        </Link>
                        <Link
                            to="/historical-weather"
                            onClick={handleClickHis}
                            className={css`
                                text-decoration: none;
                            `}
                        >
                            <div
                                className={css`
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            padding: 10px 5px;
                            &:hover {
                                background-color: #ffffff5e;
                        `}
                            >
                                {activeHis ? (
                                    <span
                                        className={css`
                                            position: absolute;
                                            width: 2%;
                                            height: 48px;
                                            top: 48px;
                                            left: 0;
                                            background-color: #239df2;
                                        `}
                                    ></span>
                                ) : (
                                    <span></span>
                                )}
                                <span>
                                    <IconButton
                                        aria-label="HistoricalWeather"
                                        size="small"
                                        className={css`
                                            padding: 0 5px;
                                        `}
                                    >
                                        <FontAwesomeIcon
                                            icon={faChartArea}
                                            inverse
                                            className={css`
                                                padding: 0 5px;
                                            `}
                                        />
                                    </IconButton>
                                </span>
                                <span
                                    className={css`
                                        margin-left: 10px;
                                        color: #fff;
                                        font-weight: bold;
                                    `}
                                >
                                    Historical Weather
                                </span>
                            </div>
                        </Link>
                        <Link
                            to="/favorites"
                            onClick={handleClickFav}
                            className={css`
                                text-decoration: none;
                            `}
                        >
                            <div
                                className={css`
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            padding: 10px 5px;
                            &:hover {
                                background-color: #ffffff5e;
                        `}
                            >
                                {activeFav ? (
                                    <span
                                        className={css`
                                            position: absolute;
                                            width: 2%;
                                            height: 48px;
                                            top: 96px;
                                            left: 0;
                                            background-color: #239df2;
                                        `}
                                    ></span>
                                ) : (
                                    <span></span>
                                )}
                                <span>
                                    <IconButton
                                        aria-label="Favorites"
                                        size="small"
                                        className={css`
                                            padding: 0 5px;
                                        `}
                                    >
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            inverse
                                            className={css`
                                                padding: 0 5px;
                                            `}
                                        />
                                    </IconButton>
                                </span>
                                <span
                                    className={css`
                                        margin-left: 10px;
                                        color: #fff;
                                        font-weight: bold;
                                    `}
                                >
                                    Favorites
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};
export default NavBar;
