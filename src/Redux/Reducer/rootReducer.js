import { combineReducers } from "redux";
import userReducer from "./userReducer";
import QuanLyDatVeReducer from "./QuanLyDatVeReducer";



export let rootReducer = combineReducers({
    userReducer,QuanLyDatVeReducer,
});