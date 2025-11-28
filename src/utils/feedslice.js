import { createSlice } from "@reduxjs/toolkit";
const feedSlice=createSlice(
    {
        name:"feed",
        initialState:[],
        reducers:{
            addToFeed:(state,action)=>{
                return action.payload
            },
            removeFeed:()=>{
                return [];
            }
        }
    }
)
export const {addToFeed,removeFeed} =feedSlice.actions;
export default feedSlice.reducer;