import styled from "styled-components";

const Link = styled.a`
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

export default Link;
