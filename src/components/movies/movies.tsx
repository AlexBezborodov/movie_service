import React from "react";

import { useSelector } from "react-redux";

import { MoviesDBStore } from "../../interfaces";

export const Movies = () => {
  const currentUser = useSelector((state: MoviesDBStore) => state.currentUser);
  return <div>movies</div>;
};
