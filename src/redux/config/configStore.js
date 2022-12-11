import { createStore } from "redux";
import { combineReducers } from "redux";
import recipe from "../modules/recipe";

const rootReducer = combineReducers({
  //   counter: counter, // Store와 module을 연결시켜 줌
  recipe,
});
const store = createStore(rootReducer);

export default store;
