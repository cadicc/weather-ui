import { css } from '@emotion/css';
import { Container } from '@mui/material';
import * as moment from 'moment';
import CurrentWeather from '~/components/Favorites/currentWeather';
import FavoritesWeather from '~/components/Favorites/favoriteWeather';

const Favorites = () => {
    return (
        <div
            className={css`
                width: 1920px;
                height: 1080px;
                background-color: #222121;
                font-family: 'Manrope', sans-serif !important;
                margin-top: 30px;
            `}
        >
            <Container>
                <div
                    className={css`
                        display: block;
                        height: 20px;
                    `}
                ></div>
                <CurrentWeather />
                <FavoritesWeather />
            </Container>
        </div>
    );
};
export default Favorites;
