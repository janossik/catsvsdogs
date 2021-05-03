import { IMesh } from "types/types";
import { Wrapper, WrapperChild } from "components/organisms/Mesh/Mesh.styles";

const Mesh = ({ listJSXElement }: IMesh) => {
  return (
    <Wrapper>
      {listJSXElement.map((JSXElement, index) => (
        <WrapperChild key={index}>{JSXElement}</WrapperChild>
      ))}
    </Wrapper>
  );
};

export default Mesh;
