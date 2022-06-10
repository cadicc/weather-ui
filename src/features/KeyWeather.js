import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        value: 'Hanoi',
        result: '',
    },
    reducers: {
        KEY_WEATHER: (state, actions) => {
            state.value = actions.payload;
        },
    },
});

export const { KEY_WEATHER } = weatherSlice.actions;
export default weatherSlice.reducer;
