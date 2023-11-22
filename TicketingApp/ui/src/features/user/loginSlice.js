import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn:false
}

export const loginSlice = createSlice({
    name : 'loginSlice',
    initialState,
    reducers:{
        setLoggedIn:(state,action)=>{
            state.isLoggedIn = action.payload
            // return state;
        }

    }
})

export  const {setLoggedIn}=loginSlice.actions;
export default loginSlice.reducer