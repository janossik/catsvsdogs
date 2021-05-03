import { useState } from "react";
import Button from "components/atoms/Button/Button";
import PictureWithHeart from "components/molecules/PictureWithHeart/PictureWithHeart";
import Points from "components/atoms/Points/Points";
import Title from "components/atoms/Title/Title";
import { Header } from "components/organisms/Animal/Animal.styles";
import { IAnimal } from "types/types";

const Animal = ({
  name,
  points,
  addPoint,
  animal,
  loading,
  refetch,
}: IAnimal) => {
  const [show, setShow] = useState(false);

  const animationTrigger = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 500);
  };
  const addPointWithAnimation = () => {
    animationTrigger();
    addPoint();
    refetch();
  };
  return (
    <article>
      <Header>
        <Title>{name}</Title>
        <Points>{points}</Points>
        <Button type="animal" onClick={addPointWithAnimation} />
      </Header>
      <PictureWithHeart
        loading={loading}
        src={animal[0]?.url}
        alt={name}
        HeartVisible={show}
        onClick={addPointWithAnimation}
      />
    </article>
  );
};

export default Animal;
