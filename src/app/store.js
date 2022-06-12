import {configureStore } from "@reduxjs/toolkit"
import userReducer from "../features/user/userSlice"
import logger from 'redux-logger'
import movieReducer from "../features/movie/movieSlice"


export default configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})