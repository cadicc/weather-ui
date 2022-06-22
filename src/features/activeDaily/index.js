import { createSlice } from '@reduxjs/toolkit';

export const activeDailySlice = createSlice({
    name: 'activeDaily',
    initialState: {
        daily: 0,
    },
    reducers: {
        set_daily: (state, action) => {
            state.daily = action.payload;
        },
    },
});

export const { set_daily } = activeDailySlice.actions;
export default activeDailySlice.reducer;
