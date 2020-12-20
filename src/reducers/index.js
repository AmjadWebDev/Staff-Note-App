import { combineReducers } from "redux";
import noteReducer from "./noteReducer";
import staffReducer from "./staffReducer";

export default combineReducers({
  note: noteReducer,
  staff: staffReducer,
});
