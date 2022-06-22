import { createSlice } from '@reduxjs/toolkit';
import * as moment from 'moment';

export const historicalSlice = createSlice({
    name: 'historical',
    initialState: {
        value: moment().format('DD'),
    },
    reducers: {
        set_historical: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { set_historical } = historicalSlice.actions;
export default historicalSlice.reducer;
