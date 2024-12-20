import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    width : null,
}

export const dataSlice = createSlice({
    name :'data',
    initialState ,
    reducers : {
        addWidth : (state,action) => {
            state.width = action.payload;
        },
    },
});

export const {addWidth} = dataSlice.actions;
export default dataSlice.reducer;