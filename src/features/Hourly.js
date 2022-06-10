import { createSlice } from '@reduxjs/toolkit';

export const hourlySlice = createSlice({
    name: 'hourly',
    initialState: {
        data: 0,
        dataHour: 0,
    },
    reducers: {
        get_hour: (state, action) => {
            state.data = action.payload;
            state.dataHour = action.payload;
        },
    },
});

export const { get_hour } = hourlySlice.actions;
export default hourlySlice.reducer;
