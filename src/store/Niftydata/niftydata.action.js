import { Nifty_Action_Types } from "./niftydata.types";

export const Set_Nifty_Index_Data = (payload) => {
  return { type: Nifty_Action_Types.Set_Nifty_Index_Data, payload: payload };
};
