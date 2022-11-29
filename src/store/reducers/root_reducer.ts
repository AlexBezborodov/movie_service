import moviesDb from "../../db/db.json";
import {
  SET_USERS,
  SIGNUP,
  SET_CURRENT_USER,
  LOGOUT,
} from "../action_type_constants";
import { MoviesDBStore } from "./../../interfaces";

const user = localStorage.getItem("currentUser");

const initialState: MoviesDBStore = {
  users: [],
  currentUser: user ? JSON.parse(user) : {},
  movies: moviesDb.movies,
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
    case LOGOUT:
      return { ...state, currentUser: [] };
    default:
      return state;
  }
}
