import { combineReducers } from "redux";
import loginReducer from "./loginReducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import permissionsReducer from "./permissionsReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loginUser", "permissions"], //The reducers should persist
};

const RootReducer = combineReducers({
  loginUser: loginReducer,
  permissions: permissionsReducer,
});

export default persistReducer(persistConfig, RootReducer);
