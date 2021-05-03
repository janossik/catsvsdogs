export const setStateAnimal = (
  points: number,
  setPoints: React.Dispatch<React.SetStateAction<number>>,
  pointsStorage: string | null
) => {
  setPoints(pointsStorage ? Number(pointsStorage) : points);
};

export const pointForAnimal = (
  nameAnimal: string,
  points: number,
  setPoints: React.Dispatch<React.SetStateAction<number>>
) => {
  setPoints(points + 1);
  localStorage.setItem(nameAnimal, (points + 1).toString());
};

export enum Animals {
  cat = "cat",
  dog = "dog",
}

export enum ApiAnimals {
  cat = "https://api.thecatapi.com/v1/images/search?limit=1&order=Rand",
  dog = "https://api.thedogapi.com/v1/images/search?limit=1&order=Rand",
}
