import React, { useState, useEffect } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";

import { BasicAlert } from "../../alert";
import { MoviesDBStore } from "../../interfaces";
import { Header } from "../header";
import { MovieDetails } from "../movie_details";
import { PinterestLayout } from "./styles";

export const Movies = () => {
  const currentUser = useSelector((state: MoviesDBStore) => state.currentUser);
  const moviesData = useSelector((state: MoviesDBStore) => state.movies);

  const [movies, setMovies] = useState([]);
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const isEmpty = (obj: any) => {
    return Object.keys(obj).length === 0;
  };

  const sizeCalc = (i: number) => {
    if (i % 2 === 0) return "medium";
    else if (i % 3 === 0) return "large";
    else return "small";
  };

  const getMovies = () => {
    if (moviesData.length) {
      setMovies(moviesData.slice(0, 20));
    } else {
      setMovies([]);
    }
  };

  const getMoreMovies = () => {
    setMovies(moviesData.slice(0, movies.length + 20));
  };

  const showCongrats = () => {
    setIsOpenAlert(true);
    setTimeout(() => {
      setIsOpenAlert(false);
    }, 5000);
  };

  useEffect(() => {
    getMovies();
    !isEmpty(currentUser) && showCongrats();
    !isEmpty(currentUser) && localStorage.removeItem("tempRegistration");
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      {movies.length && (
        <InfiniteScroll
          dataLength={movies.length}
          next={getMoreMovies}
          hasMore={true}
          loader={<h4 style={{ textAlign: "center" }}>End of list</h4>}
          style={{ margin: "0 auto" }}
        >
          <PinterestLayout>
            {movies.map((movie, index) => (
              <MovieDetails key={index} movie={movie} size={sizeCalc(index)} />
            ))}
          </PinterestLayout>
        </InfiniteScroll>
      )}

      <BasicAlert
        text={`Welcome back, ${currentUser.name}!!!`}
        isShow={isOpenAlert}
      />
    </div>
  );
};
