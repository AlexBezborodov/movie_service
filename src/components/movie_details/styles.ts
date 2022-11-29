import styled from "styled-components";

interface Props {
  pinHeight: string;
  url?: string;
}
interface SliderProps {
  img?: string;
}

export const MovieName = styled.div`
  transition: all 0.5s;
  position: absolute;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  height: 120px;
  color: #ffff;
  border-radius: 0 0 16px 16px;
  div {
    display: none;
  }
  &:hover {
    transition: all 0.5s;
    border-radius: 16px;
    height: 100%;
    background-color: #ffffffd1;
    color: black;
    justify-content: flex-start;
    overflow-y: auto;
    div {
      padding: 0 10px;
      display: block;
    }
    h3 {
      font-weight: bold;
      font-size: 20px;
    }
  }
  h3 {
    text-align: center;
  }
`;

export const Pin = styled.div<Props>`
  transition: all 0.5s;
  position: relative;
  margin: 15px 10px;
  padding: 0;
  border-radius: 16px;
  border: 1px solid #ffffff9d;
  grid-row-end: ${(props) => props.pinHeight};
  background: url(${(props) => props.url}),
    linear-gradient(3deg, #e6d16c, #16014c);
  background-size: auto 100%;
  background-position: center center;
  background-repeat: no-repeat;
`;
export const SliderWrapper = styled.div`
  max-width: 900px;
  width: 95%;
  min-height: 500px;
  position: relative;
  border-radius: 1rem;
  margin: 0 auto;
`;
export const SliderElement = styled.div<SliderProps>`
  width: 100%;
  height: 600px;
  background: url(${(props) => props.img}),
    linear-gradient(3deg, #e6d16c, #16014c);
  background-size: auto 100%;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 1rem;
`;

export const AboutMovie = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 0 0 1rem 1rem;
  div {
    padding: 1rem;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 0 1rem 0;
  color: #fff;
  h1 {
    margin: 0px;
  }
`;
export const Rating = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin: 6px 10px 0;
  }
`;
