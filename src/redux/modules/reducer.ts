import { combineReducers } from "redux";
import { changeLoginStatus } from "/Users/jeongminlee/my-movies/src/redux/modules/auth";

// export type RootState = ReturnType<typeof rootReducer>;
// reducer들을 모아주는 곳.

const rootReducer = combineReducers({
  changeLoginStatus,
});

export default rootReducer;
