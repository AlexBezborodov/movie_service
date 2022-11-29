import React, { FC } from "react";

import Alert from "@mui/material/Alert";

import { AbsoluteAlert } from "./styles";

interface AlertProps {
  text: string;
  isShow: boolean;
  severity?: any;
}

export const BasicAlert: FC<AlertProps> = ({
  text = "test",
  isShow,
  severity = "success",
}) => {
  return (
    <>
      {isShow && (
        <AbsoluteAlert>
          <Alert variant="filled" severity={severity}>
            {text}
          </Alert>
        </AbsoluteAlert>
      )}
    </>
  );
};
