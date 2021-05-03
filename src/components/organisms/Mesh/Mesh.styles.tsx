import styled from "styled-components";

export const Wrapper = styled.main`
  display: grid;
  max-width: 1024px;
  margin: 0 auto;
  grid-template-columns: repeat(1, 1fr);
  align-self: center;
  gap: 5px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const WrapperChild = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
