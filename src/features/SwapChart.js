import { createSlice } from '@reduxjs/toolkit';

export const chartSlice = createSlice({
    name: 'chart',
    initialState: {
        value: true,
    },
    reducers: {
        set_chart: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { set_chart } = chartSlice.actions;
export default chartSlice.reducer;
