import React, { useEffect } from "react";

import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { MoviesDBStore, RegistrationForm } from "../../interfaces";
import { register, setCurrentUser } from "../../store/action_creators";
import { Wrapper, Form } from "./styles";

export const Signup = () => {
  const users = useSelector((state: MoviesDBStore) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const imgUrl =
    "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1779&q=80";

  const registerNewUser = (val: RegistrationForm) => {
    let date = new Date();
    const newUser = {
      ...val,
      id: date.getTime(),
    };
    dispatch(register(newUser));
    dispatch(setCurrentUser(newUser));
    navigate("/movies");
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    localStorage.removeItem("tempRegistration");
  };

  const setInitValues = () => {
    const tempValues = localStorage.getItem("tempRegistration");
    if (tempValues) {
      const temp = JSON.parse(tempValues);
      return {
        name: temp?.name || "",
        nickName: temp?.nickName || "",
        email: temp?.email || "",
        password: temp?.password || "",
        confirmPassword: temp?.confirmPassword || "",
      };
    } else {
      return {
        name: "",
        nickName: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    }
  };

  const formik = useFormik({
    initialValues: setInitValues(),
    validationSchema: validationSchema,
    onSubmit: (values: RegistrationForm) => {
      delete values.confirmPassword;
      registerNewUser(values);
    },
  });

  useEffect(() => {
    localStorage.setItem("tempRegistration", JSON.stringify(formik.values));
  }, [formik.values]);

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { marginY: 1, width: "100%" },
      }}
    >
      <Wrapper style={{ background: `url(${imgUrl})` }}>
        <Form>
          <Typography variant="h3">Registration</Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              size="small"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={
                formik.touched.name &&
                typeof formik.errors.name === "string" &&
                formik.errors.name
              }
            />
            <TextField
              fullWidth
              id="nickName"
              name="nickName"
              label="NickName"
              size="small"
              value={formik.values.nickName}
              onChange={formik.handleChange}
              error={formik.touched.nickName && Boolean(formik.errors.nickName)}
              helperText={
                formik.touched.nickName &&
                typeof formik.errors.nickName === "string" &&
                formik.errors.nickName
              }
            />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              size="small"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={
                formik.touched.email &&
                typeof formik.errors.email === "string" &&
                formik.errors.email
              }
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
              helperText={
                formik.touched.password &&
                typeof formik.errors.password === "string" &&
                formik.errors.password
              }
            />
            <TextField
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              size="small"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword &&
                typeof formik.errors.confirmPassword === "string" &&
                formik.errors.confirmPassword
              }
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

const validationSchema = yup.object({
  name: yup.string().min(3, "Enter min 3 symbols").required("Name is required"),
  nickName: yup
    .string()
    .min(3, "Enter min 3 symbols")
    .required("NickName is required"),
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
  confirmPassword: yup
    .string()
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required")
    .matches(/[A-Z]+/, "One uppercase character")
    .matches(/[@$!%*#?&]+/, "One special character")
    .matches(/\d+/, "One number")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
