import { fireEvent, render, RenderResult } from "@testing-library/react";
import React from "react";
import Card, { ICardModal } from "./Card";

const mockCard: ICardModal = {
  open: true,
  card: {
    id: 1,
    title: "test",
    description: "my descrition",
    imageUrl: "someImage",
  },
  onSubmitModal: jest.fn(),
  onCloseModal: jest.fn(),
};

let wrapper: RenderResult;

describe("Modal component", () => {
  describe("Check struct", () => {
    beforeEach(() => {
      const mockNewCard = { ...mockCard, card: undefined };
      wrapper = render(<Card {...mockNewCard} />);
    });
    test("render card text field title", () => {
      expect(wrapper.getByText("Title")).toBeInTheDocument();
    });
    test("render card text field description", () => {
      expect(wrapper.getByText("Description")).toBeInTheDocument();
    });
    test("render card text field image", () => {
      expect(wrapper.getByText("ImageUrl")).toBeInTheDocument();
    });
  });
  describe("Check behavior", () => {
    beforeEach(() => {
      wrapper = render(<Card {...mockCard} />);
    });
    test("render title value", () => {
      expect(wrapper.getByDisplayValue(mockCard.card?.title || "")).toBeInTheDocument();
    });
    test("render card text field description", () => {
      expect(wrapper.getByDisplayValue(mockCard.card?.description || "")).toBeInTheDocument();
    });
    test("render card text field image", () => {
      expect(wrapper.getByDisplayValue(mockCard.card?.imageUrl || "")).toBeInTheDocument();
    });
    test("should call on submit modal", () => {
      fireEvent.click(wrapper.getByText("Update"));
      expect(mockCard.onSubmitModal).toHaveBeenCalledTimes(1);
    });
    test("should call on close modal", () => {
      fireEvent.click(wrapper.getByText("Cancel"));
      expect(mockCard.onCloseModal).toHaveBeenCalledTimes(1);
    });
  });
});
