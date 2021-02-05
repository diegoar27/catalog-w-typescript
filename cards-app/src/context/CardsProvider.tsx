import ICard from "models/Card";
import PropTypes from "prop-types";
import React, { ReactNode, useEffect, useState } from "react";
import api from "services/api/cardApi";
import CardsContext from "./CardsContext";

interface ICardsProvider {
  children: ReactNode;
}

const CardsProvider: React.FC<ICardsProvider> = ({ children }: ICardsProvider) => {
  const [cardList, setCardList] = useState<ICard[]>([]);

  useEffect(() => {
    updateCardList();
  }, []);

  const updateCardList = () => setCardList(api.getCards());

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

  return (
    <CardsContext.Provider
      value={{
        list: cardList,
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
