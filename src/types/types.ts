export interface IAnimal {
  name: string;
  points: number;
  addPoint: () => void;
  animal: { url: string }[];
  loading: boolean;
  refetch: () => Promise<void>;
}

export interface IHeart {
  show?: boolean;
  x?: number;
  y?: number;
}

export interface IActive {
  active: boolean;
  setActive: React.Dispatch<boolean>;
}

export interface IModal extends IActive {
  children: JSX.Element | JSX.Element[];
}

export interface IMesh {
  listJSXElement: JSX.Element[];
}

export interface IAnimalWon extends IActive {
  name: string;
}

export interface IButton {
  type?: "animal" | "close";
  children?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IPictureWithHeart {
  loading: boolean;
  src: string;
  alt: string;
  onClick: React.MouseEventHandler<HTMLElement>;
  HeartVisible: boolean;
}
