import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
   name:"loginuser",
   initialState:{
       loginuser:null
   },

   reducers:{
       login: (state, action) =>{
           state.loginuser = action.payload;
       }
   }
})

export const {login} =slice.actions;

export const LoggedUser = (state)=> state.loginuser.loginuser;

export default slice.reducer;