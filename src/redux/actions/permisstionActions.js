import { ActionTypes } from "../actionTypes/actionTypes";

const permissions = (permissionData) => {
  return {
    type: ActionTypes.PERMISSIONS,
    payload: permissionData,
  };
};

export { permissions };
