export interface Analisis {
  _id: string;
  id: number;
  name: string;
  power: number;
  element: string;
  stars: number;
  attack: number;
  defense: number;
  health: number;
  manaSpeed: string;
  class: string;
  family: string;
  event: string;
  effect: {
    id: number;
    data: string;
  }[],
  video: string;
  img: string;
}

export type compareHeroes = {
  compareHeroes: Analisis[] ;
  setCompareHeroes: React.Dispatch<React.SetStateAction<Analisis[]>>;
}

export type Modal = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}