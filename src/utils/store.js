import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userslice'
import feedReducer from './feedslice';
import requestReducer from './Requestslice';
const store=configureStore(
    {
        reducer:{
            user:userReducer,
            feed:feedReducer,
            requests:requestReducer
        },
}
)
export default store;
