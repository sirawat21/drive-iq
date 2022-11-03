import { DATA_ACTION_TYPES } from "./data.type";

/* Set store */
const INITIAL_STATE = {
  collegeLists: [],
};

/* Data reducer  */
export const dataReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case DATA_ACTION_TYPES.SET_CURRENT_DATA:
      return { ...state, collegeLists: payload };
    default:
      return state;
  }
};
