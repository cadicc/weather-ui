import { configureStore } from '@reduxjs/toolkit';
import switchReducer from '~/features/Switch';
import weatherReducer from '~/features/KeyWeather';
import dailyReducer from '~/features/DailyWeather';
import hourlyReducer from '~/features/Hourly';
import currentReducer from '~/features/Current';
import searchReducer from '~/features/Search';
import swapReducer from '~/features/SwapNavBar';
import historicalReducer from '~/features/Historical';
import chartReducer from '~/features/SwapChart';
import chartHoulyReducer from '~/features/SwapHourly';
import activeNavReducer from '~/features/activeNavBar/activeHome/index';
import activeDailyReducer from '~/features/activeDaily';
import addFavReducer from '~/features/favorites/addFavorite';

export const store = configureStore({
    reducer: {
        switch: switchReducer,
        weather: weatherReducer,
        daily: dailyReducer,
        hourly: hourlyReducer,
        current: currentReducer,
        search: searchReducer,
        swap: swapReducer,
        historical: historicalReducer,
        chart: chartReducer,
        chartHourly: chartHoulyReducer,
        activeNav: activeNavReducer,
        activeDaily: activeDailyReducer,
        addFav: addFavReducer,
    },
});

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()));
