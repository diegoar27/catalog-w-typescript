import { API_CARD } from "configuration/Global";
import ICard from "models/Card";
import api from "./localStorage";

export default class CardApi {
  static getCards = (): ICard[] => {
    const cardsJson = api.get(API_CARD) || "[]";
    return JSON.parse(cardsJson);
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
