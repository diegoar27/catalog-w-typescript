import { fireEvent, render, RenderResult } from "@testing-library/react";
import React from "react";
import Card from "./Card";
const mockCard = {
  card: {
    id: 1,
    title: "test",
    description: "my descrition",
    imageUrl: "someImage",
  },
  onEditClick: jest.fn(),
  onRemoveClick: jest.fn(),
};

let wrapper: RenderResult;

describe("Card component", () => {
  describe("Check struct", () => {
    describe("With not empty card prop", () => {
      beforeEach(() => {
        wrapper = render(<Card {...mockCard} />);
      });
      test("render card info in component title", () => {
        expect(wrapper.getByText(mockCard.card.title)).toBeInTheDocument();
      });
      test("render card info in component description", () => {
        expect(wrapper.getByText(mockCard.card.description)).toBeInTheDocument();
      });
      test("render card info in component image", () => {
        const displayedImage = document.querySelector("img") as HTMLImageElement;
        expect(displayedImage.src).toContain(mockCard.card.imageUrl);
      });
    });
    describe("With not empty card and card without image url prop", () => {
      beforeEach(() => {
        const mockWithOutImageUrl = { ...mockCard, card: { ...mockCard.card, imageUrl: "" } };
        wrapper = render(<Card {...mockWithOutImageUrl} />);
      });
      test("render card component image", () => {
        const displayedImage = document.querySelector("img") as HTMLImageElement;
        expect(displayedImage.src).toEqual(expect.stringMatching("default-image.jpg"));
      });
    });
  });
  describe("Check behavior", () => {
    beforeEach(() => {
      wrapper = render(<Card {...mockCard} />);
    });
    test("should call on edit", () => {
      fireEvent.click(wrapper.getAllByRole("button")[0]);
      expect(mockCard.onEditClick).toHaveBeenCalledTimes(1);
    });
    test("should call on remove", () => {
      fireEvent.click(wrapper.getAllByRole("button")[1]);
      expect(mockCard.onRemoveClick).toHaveBeenCalledTimes(1);
    });
  });
});
