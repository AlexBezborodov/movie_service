import styled from "styled-components";

export const Slider = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  opacity: 0.5;
  transition: opacity all 1s ease-in;
  position: absolute;
`;

export const ButtonsBlock = styled.div`
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

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
