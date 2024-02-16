import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetails :{},
    isLoggedIn:false
}

let userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.userDetails = {...action.payload}
            state.isLoggedIn = true
        },
        logout:(state,action)=>{
            state.userDetails = {...action.payload}
            state.isLoggedIn = false
        }
    }
})
let userReducer = userSlice.reducer
export const {login,logout} = userSlice.actions;
export default userReducer 