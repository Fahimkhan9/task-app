import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { tasksReducer } from "./reducers";
const rootReducer = combineReducers({
  tasksReducer: tasksReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;
