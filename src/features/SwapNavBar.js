import { createSlice } from '@reduxjs/toolkit';

export const swapSlice = createSlice({
    name: 'swap',
    initialState: {
        value: false,
        status: true,
    },
    reducers: {
        get_swap: (state, action) => {
            state.value = action.payload;
            state.status = !state.value;
        },
    },
});

export const { get_swap } = swapSlice.actions;
export default swapSlice.reducer;
