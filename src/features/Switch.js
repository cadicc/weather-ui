import { createSlice } from '@reduxjs/toolkit';

export const switchSlice = createSlice({
    name: 'switch',
    initialState: {
        value: 'Forecast',
    },
    reducers: {
        SWITCH_HOME: (state) => {
            state.value = 'Forecast';
        },
        SWITCH_HISTORICAL: (state) => {
            state.value = 'Historical Weather';
        },
        SWITCH_FAVORITES: (state) => {
            state.value = 'Favorites';
        },
    },
});
export const { SWITCH_HOME, SWITCH_HISTORICAL, SWITCH_FAVORITES } = switchSlice.actions;
export default switchSlice.reducer;
