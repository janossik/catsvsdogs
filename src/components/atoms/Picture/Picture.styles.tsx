import styled, { keyframes } from "styled-components";

const OpacityAnimation = keyframes`
    0%{
        opacity: 0%;
    }
    60%{
        opacity: 0%;
    }
    100%{
        opacity: 100%;
    }
`;

const loading = keyframes`
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(1100%);
    }
  
`;

export const LoadedPicture = styled.img`
  position: relative;
  height: 220px;
  width: 220px;
  background-color: rgba(90, 50, 30, 0.25);
  animation: ${OpacityAnimation} 1s ease-out;
  object-fit: cover;
  cursor: pointer;
  overflow-x: hidden;
  @media screen and (min-width: 768px) {
    height: 330px;
    width: 330px;
  }
  @media screen and (min-width: 1024px) {
    height: 400px;
    width: 400px;
  }
  @media screen and (min-width: 1440px) {
    height: 500px;
    width: 500px;
  }
`;

export const LoadingPicture = styled(LoadedPicture)`
  margin-bottom: 5px;
  animation: none;
  span {
    position: absolute;
    top: 0;
    left: -10%;
    display: block;
    height: 100%;
    width: 10%;
    background-color: rgba(0, 0, 0, 0.2);
    animation: ${loading} 1s ease infinite;
  }
`;
