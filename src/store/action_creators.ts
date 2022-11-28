import { LoginUser, User } from "./../interfaces";
import { SET_USERS, SIGNUP, SET_CURRENT_USER } from "./action_type_constants";

export const setUsers = (payload: any) => ({
  type: SET_USERS,
  payload,
});
export const register = (payload: User) => ({
  type: SIGNUP,
  payload,
});
export const getCurrentUser = (payload: User) => ({
  type: SET_CURRENT_USER,
  payload,
});
