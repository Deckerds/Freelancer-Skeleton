import { ActionTypes } from "../actionTypes/actionTypes";

const initalState = {
  permissions: [],
};

const permissionsReducer = (state = initalState, { type, payload }) => {
  switch (ActionTypes.PERMISSIONS) {
    case type:
      return {
        ...state,
        permissions: payload,
      };
    default:
      return state;
  }
};

export default permissionsReducer;
