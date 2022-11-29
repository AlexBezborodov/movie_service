import React, { FC } from "react";

import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../store/action_creators";

export const Header: FC<any> = ({ currentUser }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const TempRegistration = localStorage.getItem("tempRegistration");
  const isContinueReg = TempRegistration
    ? "Continue registration"
    : "Go to register";

  const isEmpty = (obj: any) => {
    return Object.keys(obj).length === 0;
  };
  const btnName = isEmpty(currentUser) ? isContinueReg : "Log out";

  const handleLogout = () => {
    navigate("/");
    dispatch(logout());
    localStorage.removeItem("currentUser");
  };

  const handleClick = () => {
    isEmpty(currentUser) ? navigate("/signup") : handleLogout();
  };

  return (
    <AppBar position="sticky" sx={{ background: "#000000" }}>
      <Toolbar>
        <Box display="flex" alignItems="center" onClick={() => navigate("/")}>
          <MovieFilterIcon />
          <Typography sx={{ marginX: 1 }}> MoviesDB</Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />
        <Button color="inherit" onClick={handleClick}>
          {btnName}
        </Button>
      </Toolbar>
    </AppBar>
  );
};
