import React from "react";
import Title from "components/atoms/Title/Title";
import Modal from "components/organisms/Modal/Modal";
import Link from "components/atoms/Link/Link";

const AnimalWon = ({
  name,
  active,
  setActive,
}: {
  name: string;
  active: boolean;
  setActive: React.Dispatch<boolean>;
}) => (
  <Modal active={active} setActive={setActive}>
    <div>
      <Title>{name}s Won</Title>
      <Link href="https://github.com/janossik">Go to GitHub</Link>
      <Link href="https://marcin-czaniecki.netlify.app">Go to Portfolio</Link>
    </div>
  </Modal>
);

export default AnimalWon;
