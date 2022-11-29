import React, { FC } from "react";

import Alert from "@mui/material/Alert";

import { AbsoluteAlert } from "./styles";

interface AlertProps {
  text: string;
  isShow: boolean;
}

export const BasicAlert: FC<AlertProps> = ({ text = "test", isShow }) => {
  return (
    <>
      {isShow && (
        <AbsoluteAlert>
          <Alert variant="filled">{text}</Alert>
        </AbsoluteAlert>
      )}
    </>
  );
};
