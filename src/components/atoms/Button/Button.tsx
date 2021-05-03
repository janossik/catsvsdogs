import {
  AnimalButton,
  CloseButton,
  DefaultButton,
} from "components/atoms/Button/Button.styles";
import { IButton } from "types/types";

const Button = ({ type, children, onClick }: IButton) => {
  if (type === "animal") {
    return <AnimalButton onClick={onClick} />;
  }
  if (type === "close") {
    return <CloseButton onClick={onClick} />;
  }
  return <DefaultButton onClick={onClick}>{children}</DefaultButton>;
};

export default Button;
