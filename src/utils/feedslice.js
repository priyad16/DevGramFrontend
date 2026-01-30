import { createSlice } from "@reduxjs/toolkit";
const feedSlice=createSlice(
    {
        name:"feed",
        initialState:[],
        reducers:{
            addToFeed:(state,action)=>{
                return action.payload
            },
            removeFeed:(state,action)=>{
                return state.filter(x=>x._id!=action.payload);
            }
        }
    }
)
export const {addToFeed,removeFeed} =feedSlice.actions;
export default feedSlice.reducer;