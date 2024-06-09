import {combineReducers} from "@reduxjs/toolkit";
import {notification} from "./notification.js";
import {auth} from "./auth.js";


export const rootReducer = combineReducers({
    notification: notification.reducer,
    auth: auth.reducer,

})


