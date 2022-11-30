import { ActionTypes } from "../actionTypes/actionTypes";

const login = (userData) => {
  return {
    type: ActionTypes.LOG_IN,
    payload: userData,
  };
};

const logOut = () => {
  return {
    type: ActionTypes.LOG_OUT,
  };
};

export { login, logOut };
