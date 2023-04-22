import { combineReducers, createStore } from "redux"; 
import burgerReducer from "./burger-reducer"; 
let reducers = combineReducers({ 
    burger: burgerReducer,
}) 
let store = createStore(reducers) 
export default store