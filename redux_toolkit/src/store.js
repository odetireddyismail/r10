import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./redux/Reducer";
import reducer from "./redux/CpoyReducer";
export const store=configureStore({
reducer:{
    Reducer,
    reducer:reducer
}
})