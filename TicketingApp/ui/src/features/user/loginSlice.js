import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    isLoggedIn : false
}

export const loginSlice = createSlice({
    name : 'loginSlice',
    intialState,
    reducers:{
        setLoggedIn:(state,action)=>{
            state.isLoggedIn = action.payload

        }

    }
})

export  const {setLoggedIn}=loginSlice.actions;
export default loginSlice.reducer