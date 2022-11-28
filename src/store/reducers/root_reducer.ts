import { SET_USERS, SIGNUP, SET_CURRENT_USER } from "../action_type_constants";
import { MoviesDBStore } from "./../../interfaces";

const initialState: MoviesDBStore = {
  users: [],
  currentUser: [],
};

export function rootReducer(state: MoviesDBStore = initialState, action: any) {
  const { payload } = action;
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: payload };
    case SIGNUP:
      return { ...state, users: state.users.concat(payload) };
    case SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
}
