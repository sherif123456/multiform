import { configureStore } from "@reduxjs/toolkit";

import  userReducer  from "../src/Features/Slice";

export default configureStore({
    reducer:{
      loginuser: userReducer,
    }
})