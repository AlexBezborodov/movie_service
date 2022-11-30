import styled from "styled-components";

export const PinterestLayout = styled.div`
  margin: 10px auto 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  grid-auto-rows: 10px;
  background-color: transparent;
  max-width: 1400px;
  border-radius: 16px;
`;

export const LayoutWrapper = styled.div`
  max-height: 600px;
  overflow-y: auto;
`;
