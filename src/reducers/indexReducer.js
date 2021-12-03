import { combineReducers } from "redux";
import navigation from './navigation'
import getHits from "./getHits";

const rootReducer = combineReducers({
  navigation: navigation,
  hits: getHits
});

export default rootReducer;
