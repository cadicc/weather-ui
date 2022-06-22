import { createSlice } from '@reduxjs/toolkit';

export const chartHourlySlice = createSlice({
    name: 'chartHourly',
    initialState: {
        value: true,
    },
    reducers: {
        set_chartHourly: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { set_chartHourly } = chartHourlySlice.actions;
export default chartHourlySlice.reducer;
