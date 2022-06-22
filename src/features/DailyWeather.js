import { createSlice } from '@reduxjs/toolkit';

export const dailySlice = createSlice({
    name: 'daily',
    initialState: {
        data: [],
        show: 0,
        value: 'Hanoi',
    },
    reducers: {
        get_api: (state, action) => {
            state.data = action.payload;
        },
        set_api: (state, action) => {
            state.show = action.payload;
        },
        set_value_fore: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { get_api, set_api, set_value_fore } = dailySlice.actions;
export default dailySlice.reducer;
