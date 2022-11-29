import React from "react";

import { useSelector } from "react-redux";

import { MoviesDBStore } from "../../interfaces";
import { Header } from "../header";

export const Movies = () => {
  const currentUser = useSelector((state: MoviesDBStore) => state.currentUser);
  console.log("currentUser", currentUser);
  return (
    <div>
      <Header currentUser={currentUser} />
    </div>
  );
};
