import { createSlice } from '@reduxjs/toolkit';

export const addFavSlice = createSlice({
    name: 'addFav',
    initialState: {
        value: JSON.parse(localStorage.getItem('listFav')) || [],
        favList: [],
    },
    reducers: {
        set_fav: (state, action) => {
            state.value = [...state.value, action.payload];
        },
        get_fav: (state, action) => {
            if (Object.keys(state.favList).length < Object.keys(state.value).length) {
                state.favList = state.favList.concat(action.payload);
            }
        },
    },
});

export const { set_fav, get_fav } = addFavSlice.actions;
export default addFavSlice.reducer;
