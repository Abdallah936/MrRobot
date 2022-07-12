import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { countryReducer } from "./countryReducer";

const reducers = combineReducers({
  countryReducer,
  userReducer,
});
export default reducers;
