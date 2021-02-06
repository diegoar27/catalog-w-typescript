import ICard from "models/Card";
import ISortOption from "models/SortOption";
import React from "react";

export interface IContext {
  list: ICard[];
  get: (sort: ISortOption) => void;
  add: (card: ICard) => void;
  update: (card: ICard) => void;
  delete: (id: number) => void;
}

const CardsContext = React.createContext<IContext>({
  list: [],
  get: () => null,
  add: () => null,
  update: () => null,
  delete: () => null,
});

export default CardsContext;
