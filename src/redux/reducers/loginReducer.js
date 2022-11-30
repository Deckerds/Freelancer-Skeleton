import { ActionTypes } from "../actionTypes/actionTypes";

const initalState = {
  user: {},
};

const loginReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOG_IN:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
