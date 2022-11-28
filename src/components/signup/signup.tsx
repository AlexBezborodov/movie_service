import React from "react";

import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { Wrapper, Form } from "./styles";

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

export const Signup = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      nickName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const imgUrl =
    "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1779&q=80";

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
              helperText={formik.touched.name && formik.errors.name}
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
              helperText={formik.touched.nickName && formik.errors.nickName}
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
                formik.touched.confirmPassword && formik.errors.confirmPassword
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
