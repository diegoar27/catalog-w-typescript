import CardList from "components/List/CardList";
import CardModal from "components/Modals/Card";
import BottomBar from "components/NavBar/BottomBar";
import TopBar from "components/NavBar/TopBar";
import CardsContext from "context/CardsContext";
import ICard from "models/Card";
import React, { ReactElement, useContext, useState } from "react";

const CardsPage: React.FC = (): ReactElement => {
  const [itemModal, setItemModal] = useState<ICard>();
  const [showModal, setShowModal] = useState(false);
  const context = useContext(CardsContext);

  const handleOnAddItemClick = () => {
    setItemModal(undefined);
    setShowModal(true);
  };

  const handleOnEditItemClick = (item: ICard) => {
    setItemModal(item);
    setShowModal(true);
  };

  const handleOnModalSubmit = (item: ICard) => {
    if (item.id) {
      context.update(item);
    } else {
      context.add(item);
    }
    setShowModal(false);
  };

  const handleOnModalClose = () => {
    setItemModal(undefined);
    setShowModal(false);
  };

  return (
    <>
      <TopBar onAddClick={handleOnAddItemClick} />
      <CardList onEditItemClick={handleOnEditItemClick} />
      <CardModal
        open={showModal}
        card={itemModal}
        onSubmitModal={handleOnModalSubmit}
        onCloseModal={handleOnModalClose}
      />
      <BottomBar onAddClick={handleOnAddItemClick} />
    </>
  );
};

export default CardsPage;
