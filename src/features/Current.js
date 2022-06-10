import { createSlice } from '@reduxjs/toolkit';

export const currentSlice = createSlice({
    name: 'current',
    initialState: {
        value: 'Hanoi',
    },
    reducers: {
        current_weather: (state, actions) => {
            state.value = actions.payload;
        },
    },
});

export const { current_weather } = currentSlice.actions;
export default currentSlice.reducer;
