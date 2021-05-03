import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 50vh;
  left: 50vw;
  display: flex;
  min-height: 10vh;
  width: clamp(200px, 90%, 500px);
  padding: 25px 0 20px;
  background-color: rgba(255, 255, 255, 1);
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  z-index: 3;
`;
