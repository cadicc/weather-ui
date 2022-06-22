import { createSlice } from '@reduxjs/toolkit';

export const moonSlice = createSlice({
    name: 'moonphase',
    initialState: {
        value: 'grey',
    },
    reducers: {
        set_moonphase: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { set_moonphase } = moonSlice.actions;
export default moonSlice.reducer;
