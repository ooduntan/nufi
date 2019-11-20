import { combineReducers } from "redux";
import { teams } from "./teams";
import { conferences } from "./conferences";

export default combineReducers({
  conferences,
  teams
});
