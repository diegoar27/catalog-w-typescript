import ICard from "models/Card";
import ISortOption from "models/SortOption";
import PropTypes from "prop-types";
import React, { ReactNode, useEffect, useState } from "react";
import api from "services/api/cardApi";
import CardsContext from "./CardsContext";

interface ICardsProvider {
  children: ReactNode;
}

const CardsProvider: React.FC<ICardsProvider> = ({ children }: ICardsProvider) => {
  const [cardList, setCardList] = useState<ICard[]>([]);
  const [sortOption, setSortOption] = useState<ISortOption>({ field: "id", direction: "asc" });

  useEffect(() => {
    updateCardList();
  }, []);

  const updateCardList = () => setCardList(api.getCards(sortOption));

  const createCard = (card: ICard) => {
    api.addNew(card);
    updateCardList();
  };

  const updateCard = (card: ICard) => {
    api.update(card);
    updateCardList();
  };

  const deleteCard = (id: number) => {
    api.delete(id);
    updateCardList();
  };

  const get = (sort: ISortOption) => {
    setSortOption(sort);
    setCardList(api.getCards(sort));
  };

  return (
    <CardsContext.Provider
      value={{
        list: cardList,
        get: get,
        add: createCard,
        update: updateCard,
        delete: deleteCard,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};

CardsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardsProvider;
