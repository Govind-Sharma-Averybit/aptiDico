import { combineReducers } from "redux";
import authUser from "./auth/reducer";
import userData from "./user/reducer";

const reducers = combineReducers({
  authUser,
  userData,
});

export default reducers;
