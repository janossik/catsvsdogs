import Button from "components/atoms/Button/Button";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Background, Wrapper } from "./Modal.styles";
import { IModal } from "types/types";

const socketModal = document.createElement("div");

const Modal = ({ active, setActive, children }: IModal) => {
  useEffect(() => {
    document.body.prepend(socketModal);
    return () => {
      socketModal.remove();
    };
  }, []);
  return createPortal(
    active && (
      <>
        <Background
          onClick={() => {
            setActive(false);
          }}
        ></Background>
        <Wrapper>
          <div>
            <Button
              type="close"
              onClick={() => {
                setActive(false);
              }}
            />
          </div>
          {children}
        </Wrapper>
      </>
    ),
    socketModal
  );
};

export default Modal;
