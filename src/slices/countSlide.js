import { createSlice } from "@reduxjs/toolkit";
const countSlice = createSlice({
    name :"count", // định danh duy nhất 
    initialState :{
        count:0,
    },
    reducers:{
        // Kết hợp giữa action creator và reducer
        increment:(state,action)=>{
            return {...state,count : state.count+1}
        }
    }
})
// export actions
export const {increment,decrement} = countSlice.actions;
// 
export default countSlice