import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import darkModeReducer from "./dark-mode/dark-mode.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme"]
};

const rootReducer = combineReducers({
  theme: darkModeReducer
});

export default persistReducer(persistConfig, rootReducer);
