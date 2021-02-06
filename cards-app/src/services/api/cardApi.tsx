import { API_CARD } from "configuration/Global";
import ICard from "models/Card";
import ISortOption from "models/SortOption";
import api from "./localStorage";

export default class CardApi {
  static getCards = (option: ISortOption): ICard[] => {
    const cardsJson = api.get(API_CARD) || "[]";
    const collection = JSON.parse(cardsJson);
    let result;

    if (option.field === "id") {
      result = collection.sort((a: ICard, b: ICard) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
    }
    if (option.field === "title") {
      result = collection.sort((a: ICard, b: ICard) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));
    }

    return option.direction === "asc" ? result : result.reverse();
  };

  static addNew = (card: ICard): void => {
    api.post(API_CARD, { ...card, id: Date.now() });
  };

  static update = (card: ICard): void => {
    api.put(API_CARD, card);
  };

  static delete = (id: number): void => {
    api.delete(API_CARD, id);
  };
}
