import { Company_Action_Types } from "./company.types";

const INITIAL_STATE = {
  ciplaData: [],
  tatasteelData: [],
  relianceData: [],
  eichermotData: [],
  ashokleyData: [],
  CurrentCompany: "relianceData",
};

export const CompanyReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case Company_Action_Types.Set_Company_data: {
      state = { ...state, ...payload };
      return state;
    }

    case Company_Action_Types.Set_Current_Company_Name: {
      return { ...state, CurrentCompany: payload };
    }

    default: {
      return state;
    }
  }
};
