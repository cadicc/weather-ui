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
    },
});
export const { SWITCH_HOME, SWITCH_HISTORICAL } = switchSlice.actions;
export default switchSlice.reducer;
