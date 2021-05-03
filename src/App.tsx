import { useState, useEffect } from "react";
import Animal from "components/organisms/Animal/Animal";
import { useAnimal } from "hooks/useAnimal";
import GlobalStyle from "theme/GlobalStyle";
import {
  Animals,
  ApiAnimals,
  setStateAnimal,
  pointForAnimal,
} from "helper/helper";
import Mesh from "components/organisms/Mesh/Mesh";
import AnimalWon from "components/organisms/AnimalWon/AnimalWon";

const App = () => {
  const [catPoints, setCatPoints] = useState<number>(0);
  const [dogPoints, setDogPoints] = useState<number>(0);
  const [catWon, setCatWon] = useState(false);
  const [dogWon, setDogWon] = useState(false);

  const cat = useAnimal<{ url: string }[]>(
    ApiAnimals[Animals.cat],
    process.env.REACT_APP_CAT_KEY
  );

  const dog = useAnimal<{ url: string }[]>(
    ApiAnimals[Animals.dog],
    process.env.REACT_APP_CAT_KEY
  );

  const reset = () => {
    localStorage.clear();
    setCatPoints(0);
    setDogPoints(0);
  };

  useEffect(() => {
    const areStateZero = catPoints === 0 && dogPoints === 0;
    if (areStateZero) {
      const catPointsStorage = localStorage.getItem(Animals.cat);
      const dogPointsStorage = localStorage.getItem(Animals.dog);

      const arePointsInStorage = catPointsStorage && dogPointsStorage;

      if (arePointsInStorage) {
        setStateAnimal(catPoints, setCatPoints, catPointsStorage);
        setStateAnimal(dogPoints, setDogPoints, dogPointsStorage);
      }
    }
    if (catPoints >= 10) {
      reset();
      setCatWon(true);
    }
    if (dogPoints >= 10) {
      reset();
      setDogWon(true);
    }
  }, [catPoints, setCatPoints, dogPoints, setDogPoints]);

  return (
    <>
      <GlobalStyle />
      <AnimalWon active={catWon} setActive={setCatWon} name={Animals.cat} />
      <AnimalWon active={dogWon} setActive={setDogWon} name={Animals.dog} />
      <Mesh
        listJSXElement={[
          <Animal
            name={Animals.cat}
            points={catPoints}
            addPoint={() =>
              pointForAnimal(Animals.cat, catPoints, setCatPoints)
            }
            animal={cat.animal}
            loading={cat.loading}
            refetch={dog.refetch}
          />,
          <Animal
            name={Animals.dog}
            points={dogPoints}
            addPoint={() =>
              pointForAnimal(Animals.dog, dogPoints, setDogPoints)
            }
            animal={dog.animal}
            loading={dog.loading}
            refetch={cat.refetch}
          />,
        ]}
      />
    </>
  );
};

export default App;
