import { User_Action_Types } from "./user.types.js";

export const SetCurrentUser = (user) => {
  return { type: User_Action_Types.Set_current_user, payload: user };
};
