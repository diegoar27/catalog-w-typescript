import { render, RenderResult } from "@testing-library/react";
import CardsContext, { IContext } from "context/CardsContext";
import ICard from "models/Card";
import React from "react";
import CardList from "./CardList";

const list: ICard[] = [
  { id: 1, title: "test 1", description: "desc", imageUrl: "image" },
  { id: 2, title: "test 2", description: "desc2", imageUrl: "image" },
];
const mockProvider: IContext = {
  list,
  add: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};
const fakeOnEditClick = jest.fn();
const renderCardList = (mock: IContext) =>
  render(
    <CardsContext.Provider value={mock}>
      <CardList onEditItemClick={fakeOnEditClick} />
    </CardsContext.Provider>,
  );

let wrapper: RenderResult;

describe("Card list component", () => {
  describe("Check struct", () => {
    describe("With items in the list", () => {
      beforeEach(() => {
        wrapper = renderCardList(mockProvider);
      });
      test("render card list component and cards", () => {
        expect(wrapper.getByTestId("list")).toBeTruthy();
        list.forEach((x) => {
          expect(wrapper.getByText(x.title)).toBeTruthy();
          expect(wrapper.getByText(x.description)).toBeTruthy();
        });
      });
    });
    describe("Without items in the list", () => {
      beforeEach(() => {
        wrapper = renderCardList({ ...mockProvider, list: [] });
      });
      test("render card list component", () => {
        expect(wrapper.getByTestId("list").children.length).toBe(1);
      });
    });
  });
});
