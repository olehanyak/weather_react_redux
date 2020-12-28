import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import weatherReducer from "./reducers/WeatherReducer";

let reducers = combineReducers({
  weatherPage: weatherReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;