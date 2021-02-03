export default class Api {
    static get = (endPoint: string): string => {
        return localStorage.getItem(endPoint) || '';
    };

    static post = (endPoint: string, item: unknown): void => {
        let collection = [];
        const jsonValue = localStorage.getItem(endPoint);
        if (jsonValue) {
            collection = JSON.parse(jsonValue);
        }
        // concatenar valores
        localStorage.setItem(endPoint, JSON.stringify([...collection, item]));
    };
}
