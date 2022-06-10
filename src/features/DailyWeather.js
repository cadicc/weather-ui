import { createSlice } from '@reduxjs/toolkit';

export const dailySlice = createSlice({
    name: 'daily',
    initialState: {
        data: [],
        daily: [],
    },
    reducers: {
        get_api: (state, action) => {
            state.data = action.payload;
        },
        set_api: (state, action) => {
            state.daily = action.payload;
        },
    },
});

export const { get_api, set_api } = dailySlice.actions;
export default dailySlice.reducer;
