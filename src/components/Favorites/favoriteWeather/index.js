import { css } from '@emotion/css';
import ListFav from '~/components/listFav';

const FavoritesWeather = () => {
    return (
        <div
            className={css`
                color: #ffffff;
            `}
        >
            <h2>Favorites Weather</h2>
            <div>
                <div
                    className={css`
                        // width: 25%;
                        height: 100%;
                        margin: 0 10px;
                        margin-left: 0;
                    `}
                >
                    <ListFav />
                </div>
            </div>
        </div>
    );
};
export default FavoritesWeather;
