import { Company_Action_Types } from "./company.types";

export const Set_Company_data = (payload) => {
  return { type: Company_Action_Types.Set_Company_data, payload: payload };
};

export const Set_Current_Company_Name = (payload) => {
  return {
    type: Company_Action_Types.Set_Current_Company_Name,
    payload: payload,
  };
};
