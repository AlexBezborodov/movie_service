import React, { useState, useEffect } from "react";

import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.jpeg";
import image4 from "../../assets/image4.jpeg";

export const StartPage = () => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(1);

  const change = () => {
    if (photo === 4) {
      setPhoto(1);
      return;
    }

    setPhoto((prev) => prev + 1);
  };

  const returnPhotoURL = () => {
    switch (photo) {
      case 1:
        return image1;
      case 2:
        return image2;
      case 3:
        return image3;
      case 4:
        return image4;
      default:
        return null;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      change();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [photo]);

  return (
    <Wrapper>
      <Slider style={{ backgroundImage: `url(${returnPhotoURL()})` }}></Slider>
      <ButtonsBlock>
        <Box display="flex" flexDirection="column">
          <Typography variant="h2" color="white">
            MovieDB
          </Typography>
          <Button
            sx={{ m: 1 }}
            variant="contained"
            onClick={() => navigate("/login")}
          >
            Sign In
          </Button>
          <Button
            sx={{ m: 1 }}
            variant="contained"
            color="inherit"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
          <Button
            sx={{ m: 1 }}
            color="info"
            onClick={() =>
              navigate("/movies", { state: { user: "unauthorized" } })
            }
          >
            Browse like a guest
          </Button>
        </Box>
      </ButtonsBlock>
    </Wrapper>
  );
};

const Slider = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  opacity: 0.5;
  transition: opacity all 1s ease-in;
  position: absolute;
`;

const ButtonsBlock = styled.div`
  width: 300px;
  height: 300px;
  padding: 1rem;
  opacity: 1;
  background-color: #00000093;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
