import CardList from "components/List/CardList";
import CardsProvider from "context/CardsProvider";
import React from "react";

const CardsPage = () => {
  return (
    <CardsProvider>
      <CardList />
    </CardsProvider>
  );
};

export default CardsPage;
