import { combineReducers } from "redux";

import { UserReducer } from "./user/user.reducer";
import { NiftyIndexReducer } from "./Niftydata/niftydata.reducer";
import { CompanyReducer } from "./companydata/companydata.reducer";
export const rootReducer = combineReducers({
  user: UserReducer,
  NiftyData: NiftyIndexReducer,
  CompanyStockData: CompanyReducer,
});
