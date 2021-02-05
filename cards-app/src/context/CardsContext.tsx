import ICard from "models/Card";
import React from "react";

export interface IContext {
  list: ICard[];
  add: (card: ICard) => void;
  update: (card: ICard) => void;
  delete: (id: number) => void;
}

const CardsContext = React.createContext<IContext>({
  list: [],
  add: () => null,
  update: () => null,
  delete: () => null,
});

export default CardsContext;
