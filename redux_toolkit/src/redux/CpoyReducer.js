import { createSlice } from "@reduxjs/toolkit";

const initialState={
 add:0,
}

const CopyReducer=createSlice({
    name:'CopyReducer',
    initialState,
    reducers:{
        incre:(state,action)=>{


            return {
                ...state,
                add:state.add+1
            }
        },
        decre:(state,action)=>{

            return {
                ...state,
                add:state.add-1
            }
        }
    }
})

export const {incre,decre}=CopyReducer.actions;

export default CopyReducer.reducer