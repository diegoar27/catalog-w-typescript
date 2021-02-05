export default class Api {
  static get = (endPoint: string): string => {
    return localStorage.getItem(endPoint) || "";
  };

  static post = (endPoint: string, item: unknown): void => {
    let collection = [];
    const jsonValue = localStorage.getItem(endPoint);
    if (jsonValue) {
      collection = JSON.parse(jsonValue);
    }

    localStorage.setItem(endPoint, JSON.stringify([...collection, item]));
  };

  static put = (endPoint: string, item: { id: number }): void => {
    let collection = [];
    const jsonValue = localStorage.getItem(endPoint);
    if (jsonValue) {
      collection = JSON.parse(jsonValue);
    }
    const filteredCollection = collection.filter((x: { id: any }) => x.id !== item.id);

    localStorage.setItem(endPoint, JSON.stringify([...filteredCollection, item]));
  };

  static delete = (endPoint: string, id: number): void => {
    let collection = [];
    const jsonValue = localStorage.getItem(endPoint);
    if (jsonValue) {
      collection = JSON.parse(jsonValue);
    }
    const filteredCollection = collection.filter((x: { id: number }) => x.id !== id);

    localStorage.setItem(endPoint, JSON.stringify(filteredCollection));
  };
}
