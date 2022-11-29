import { User } from "./../interfaces";
import {
  SET_USERS,
  SIGNUP,
  SET_CURRENT_USER,
  LOGOUT,
} from "./action_type_constants";

export const setUsers = (payload: User[]) => ({
  type: SET_USERS,
  payload,
});
export const register = (payload: User) => ({
  type: SIGNUP,
  payload,
});
export const setCurrentUser = (payload: User) => ({
  type: SET_CURRENT_USER,
  payload,
});
export const logout = () => ({
  type: LOGOUT,
});
