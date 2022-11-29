import React from "react";

import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { LoginUser, MoviesDBStore } from "../../interfaces";
import { setCurrentUser } from "../../store/action_creators";
import { Wrapper, Form } from "./styles";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required")
    .matches(/[A-Z]+/, "One uppercase character")
    .matches(/[@$!%*#?&]+/, "One special character")
    .matches(/\d+/, "One number"),
});

export const Login = () => {
  const store = useSelector((state: MoviesDBStore) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkUserCreds = (val: LoginUser) => {
    const includes =
      store.filter(
        (item) => item.email === val.email && item.password === val.password
      ).length > 0;
    if (includes) {
      navigate("/movies");
      localStorage.setItem("isLogged", "true");
      dispatch(
        setCurrentUser(
          store.filter(
            (item) => item.email === val.email && item.password === val.password
          )[0]
        )
      );
    } else {
      alert("user not registered");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      checkUserCreds(values);
    },
  });
  const imgUrl =
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80";

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { marginY: 1, width: "100%" },
      }}
    >
      <Wrapper style={{ background: `url(${imgUrl})` }}>
        <Form>
          <Typography variant="h2">Login</Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              size="small"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              size="small"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button
              color="primary"
              sx={{ width: "100%", marginY: 2 }}
              variant="contained"
              fullWidth
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      </Wrapper>
    </Box>
  );
};
