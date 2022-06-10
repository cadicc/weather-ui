import { configureStore } from '@reduxjs/toolkit';
import switchReducer from '~/features/Switch';
import weatherReducer from '~/features/KeyWeather';
import dailyReducer from '~/features/DailyWeather';
import hourlyReducer from '~/features/Hourly';
import currentReducer from '~/features/Current';

export const store = configureStore({
    reducer: {
        switch: switchReducer,
        weather: weatherReducer,
        daily: dailyReducer,
        hourly: hourlyReducer,
        current: currentReducer,
    },
});

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()));
