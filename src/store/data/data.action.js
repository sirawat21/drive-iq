import { DATA_ACTION_TYPES } from "./data.type";

/* Template of create action */
const createAction = (type, payload) => ({ type, payload });

/* Actual action to set a value to store of data */
export const setStoreData = (data) =>
  createAction(DATA_ACTION_TYPES.SET_CURRENT_DATA, data);
