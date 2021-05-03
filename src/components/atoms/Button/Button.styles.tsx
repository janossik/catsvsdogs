import styled from "styled-components";
import pawIcon from "assets/paw.svg";

export const AnimalButton = styled.button`
  height: 50px;
  width: 50px;
  margin-left: 10px;
  background: linear-gradient(#ce1e36, #ce1ec5);
  mask-image: url(${pawIcon});
  mask-size: 100% auto;
  mask-repeat: no-repeat;
  color: rgba(250, 250, 250, 1);
  font-weight: bold;
  letter-spacing: 0.3px;
  border: none;
  transition: 200ms;
  :hover {
    transform: scale(1.1);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  height: 30px;
  width: 30px;
  background: transparent;
  border: none;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    height: 3px;
    width: 30px;
    background: linear-gradient(#ce1e36, #ce1ec5);
    transform: translateY(-100%) rotate(-45deg);
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    height: 3px;
    width: 30px;
    background: linear-gradient(#ce1e36, #ce1ec5);
    transform: translateY(-100%) rotate(45deg);
  }
  @media print {
    display: none;
  }
`;

export const DefaultButton = styled.button`
  display: flex;
  margin: 10px 0;
  padding: 5px 10px;
  align-items: center;
  justify-content: center;
  color: #ce1ec5;
  text-decoration: none;
  border: solid 2px #ce1ec5;
  border-radius: 20px;
  :hover {
    color: blueviolet;
    border: solid 2px blueviolet;
  }
`;
