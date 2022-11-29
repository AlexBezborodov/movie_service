export interface LoginUser {
  email: string;
  password: string;
}
export interface User {
  id: number;
  name: string;
  nickName: string;
  email: string;
  password: string;
}
export interface MoviesDBStore {
  users: User[] | [];
  currentUser: User | {};
}
export interface RegistrationForm {
  name: string;
  nickName: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
