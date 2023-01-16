import { Nifty_Action_Types } from "./niftydata.types";
const INITIAL_STATE = {
  NSEdata: [],
  BSEdata: [],
};

export const NiftyIndexReducer = (state = INITIAL_STATE , action) => {
  const { type, payload } = action;

  switch (type) {
    case Nifty_Action_Types.Set_Nifty_Index_Data: {
      state = payload;
      return state;
    }
    default: {
      return state;
    }
  }
};
