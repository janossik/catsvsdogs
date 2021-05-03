import React, { useState } from "react";
import Heart from "components/atoms/Heart/Heart";
import Picture from "components/atoms/Picture/Picture";
import { IPictureWithHeart } from "types/types";

const PictureWithHeart = ({
  loading,
  src,
  alt,
  onClick,
  HeartVisible,
}: IPictureWithHeart) => {
  const [position, setPosition] = useState({ x: 0, y: 300 });

  const hendler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setPosition({ x: e.clientX, y: e.clientY });
    onClick(e);
  };
  return (
    <section onClick={hendler}>
      <Heart show={HeartVisible} x={position.x} y={position.y} />
      <Picture loading={loading} src={src} alt={alt} />
    </section>
  );
};

export default PictureWithHeart;
