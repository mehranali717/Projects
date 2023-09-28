import { createSlice } from "@reduxjs/toolkit";
const ModalSlice = createSlice({
    name:'modal',
    initialState:{value:false},
    reducers:{
        displayModal:(state)=>{
             state.value=!state.value;
        }
    }
});
export const {displayModal } = ModalSlice.actions;
export default ModalSlice.reducer;