import React, { FC, useState } from "react";

import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
import { Typography } from "@mui/material";
import Slider from "react-slick";

import { CustomModal } from "../custom_modal";
import {
  Pin,
  MovieName,
  SliderWrapper,
  SliderElement,
  AboutMovie,
  TitleWrapper,
  Rating,
} from "./styles";

interface MovieDetailProps {
  movie: any;
  size: string;
}

export const MovieDetails: FC<MovieDetailProps> = ({ movie, size }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const pinHeight = (size: string) => {
    switch (size) {
      case "small":
        return "span 33";
      case "medium":
        return "span 45";
      case "large":
        return "span 59";
      default:
        return "span 45";
    }
  };

  const toggleModal = () => setIsOpenModal((prev: boolean) => !prev);

  return (
    <Pin
      pinHeight={pinHeight(size)}
      url={movie.posterUrl}
      onClick={toggleModal}
    >
      <MovieName>
        <h3>{movie.title}</h3>
        <span>{movie.genres.toString()}</span>
        <Rating>
          <span>IMDB rating: {movie.imdb}</span>
          {+movie.imdb >= 7 && <ThumbUpTwoToneIcon style={{ color: "gold" }} />}
        </Rating>

        <div>
          <p>
            <b>Director:</b> {movie.director}
          </p>
          <p>
            <b>Year:</b> {movie.year}
          </p>
          <p>
            <b>Actors:</b> {movie.actors}
          </p>
          <p>
            <b>Description:</b>
            {movie.plot}
          </p>
        </div>
      </MovieName>
      <CustomModal isOpenModal={isOpenModal} toggleModal={toggleModal}>
        <TitleWrapper>
          <h1>{movie.title}</h1>
          <Typography>{movie.genres.toString()}</Typography>
          <Rating>
            <span>IMDB rating: {movie.imdb}</span>
            {+movie.imdb >= 7 && (
              <ThumbUpTwoToneIcon style={{ color: "black" }} />
            )}
          </Rating>
          <span>{movie.year} year</span>
        </TitleWrapper>

        <SliderWrapper>
          <Slider {...settings}>
            {movie.screenshots &&
              movie.screenshots.map((screen: string, index: number) => (
                <SliderElement key={index} img={screen} />
              ))}
            <SliderElement img={movie.posterUrl} />
            <SliderElement img={movie.posterUrl} />
            <SliderElement img={movie.posterUrl} />
          </Slider>
          <AboutMovie>
            <div>
              <p>
                <b>Director:</b> {movie.director}
              </p>
              <p>
                <b>Actors:</b> {movie.actors}
              </p>
              <p>
                <b>Description:</b>
                {movie.plot}
              </p>
            </div>
          </AboutMovie>
        </SliderWrapper>
      </CustomModal>
    </Pin>
  );
};
