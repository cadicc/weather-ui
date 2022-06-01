import Forecast from '~/pages/Home';
import HistoricalWeather from '~/pages/Historical Weather';

const publicRoutes = [
    {
        path: '/',
        component: Forecast,
    },
    {
        path: '/historical-weather',
        component: HistoricalWeather,
    },
];
const privateRoutes = [{}];
export { publicRoutes, privateRoutes };
