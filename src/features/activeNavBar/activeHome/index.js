import { createSlice } from '@reduxjs/toolkit';

export const activeNavSlice = createSlice({
    name: 'activeNav',
    initialState: {
        home: true,
        history: false,
        favorite: false,
    },
    reducers: {
        set_activeHome: (state, action) => {
            state.home = action.payload;
        },
        set_activeHis: (state, action) => {
            state.history = action.payload;
        },
        set_activeFav: (state, action) => {
            state.favorite = action.payload;
        },
    },
});

export const { set_activeHome, set_activeHis, set_activeFav } = activeNavSlice.actions;
export default activeNavSlice.reducer;
