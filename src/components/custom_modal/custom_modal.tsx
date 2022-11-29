import React, { FC } from "react";

import { Modal } from "@mui/material/";
import styled from "styled-components";

interface ModalProps {
  toggleModal: () => void;
  isOpenModal: boolean;
  children?: any;
}

export const CustomModal: FC<ModalProps> = ({
  isOpenModal,
  children,
  toggleModal,
}) => {
  return (
    <div>
      <Modal
        open={isOpenModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ outline: 0 }}
      >
        <StyledBox>{children}</StyledBox>
      </Modal>
    </div>
  );
};

const StyledBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  height: 90%;
  overflow-y: auto;
  background: radial-gradient(#fceabb, #f8b500);
  border-radius: 16px;
  box-shadow: 24px;
  padding: 16px;
`;
