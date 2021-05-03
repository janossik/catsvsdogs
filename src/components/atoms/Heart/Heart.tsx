import styled from "styled-components";
import heartIcon from "assets/heart.png";
import { IHeart } from "types/types";

const Heart = styled.span<IHeart>`
  position: absolute;
  top: ${({ y }) => (y ? y : "auto")}px;
  left: ${({ x }) => (x ? x : "auto")}px;
  height: 50px;
  width: 50px;
  background: url(${heartIcon});
  background-size: cover;
  z-index: 10;
  transform: translate(
    ${({ x }) => (x ? "-50%" : "100px")},
    ${({ y }) => (y ? "-50%" : "100px")}
  );
  opacity: ${({ show }) => (show ? "100%" : "0%")};
  transition: opacity 300ms ease-out;
  cursor: pointer;
  z-index: 1;
`;

export default Heart;
