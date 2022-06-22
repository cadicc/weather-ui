import Forecast from '~/pages/Home';
import HistoricalWeather from '~/pages/Historical Weather';
import Favorites from '~/pages/Favorites';
import AddFavorite from '~/pages/Favorites/AddFavorite';

const publicRoutes = [
    {
        path: '/',
        component: Forecast,
    },
    {
        path: '/historical-weather',
        component: HistoricalWeather,
    },
    {
        path: '/favorites',
        component: Favorites,
    },
    {
        path: '/favorites/add-favorite',
        component: AddFavorite,
    },
];
const privateRoutes = [{}];
export { publicRoutes, privateRoutes };
