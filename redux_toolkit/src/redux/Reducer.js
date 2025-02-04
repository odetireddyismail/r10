import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count:0,
    products:[],
}
 const Slice=createSlice({
    
    name:'ReducerSlice',
    initialState,
    reducers:{
        increment:(state,{type,payload})=>{
         let hi

            if(state.count===0){
                 hi=state.count+1
            }

            else {
                hi=state.count+1
            }
            
               return {
                ...state,
                count:hi
               }
        },

        decrement:(state,{action,payload})=>{
           
            return {
                ...state,
                count:state.count-1
            }
        },
        produ:(state,{payload})=>{
 
            

            return {
                ...state,
                products:payload

            }
        }
    }
    }
);

export const{increment,decrement,produ}=Slice.actions;

export default Slice.reducer