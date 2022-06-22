import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        value: ' ',
    },
    reducers: {
        set_value: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { set_value } = searchSlice.actions;
export default searchSlice.reducer;
