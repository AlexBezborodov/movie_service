export interface LoginUser {
  email: string;
  password: string;
}
export interface User {
  id?: number;
  name?: string;
  nickName?: string;
  email?: string;
  password?: string;
}
export interface MoviesDBStore {
  users: User[] | [];
  currentUser: User;
  movies: Array<Movie> | any;
}
export interface RegistrationForm {
  name?: string;
  nickName: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
export interface Movie {
  id: number;
  title: string;
  year: string | number;
  runtime: string | number;
  genres: Array<string>;
  director: string;
  actors: string;
  plot: string;
  screenshots: string[];
  imdb: number;
  posterUrl: string;
}
