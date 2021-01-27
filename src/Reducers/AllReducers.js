import { combineReducers } from "redux";
import PeopleReducer from "./PeopleReducer";
import CounterReducer from "./CounterReducer";

const AllReducers = combineReducers({
  PeopleReducer,
  CounterReducer,
});

export default AllReducers;
