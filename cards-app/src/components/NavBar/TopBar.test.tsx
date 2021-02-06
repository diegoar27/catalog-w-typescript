import { fireEvent, render, RenderResult } from "@testing-library/react";
import React from "react";
import TopBar, { ITopNavBar } from "./TopBar";

const mock: ITopNavBar = {
  onAddClick: jest.fn(),
  onSortChange: jest.fn(),
};

let wrapper: RenderResult;

describe("Top nav bar component", () => {
  describe("Check struct", () => {
    beforeEach(() => {
      wrapper = render(<TopBar {...mock} />);
    });
    test("render add card button", () => {
      expect(wrapper.getByLabelText("add-card")).toBeInTheDocument();
    });
  });
  describe("Check behavior", () => {
    beforeEach(() => {
      wrapper = render(<TopBar {...mock} />);
    });
    test("should call on add card", () => {
      fireEvent.click(wrapper.getByLabelText("add-card"));
      expect(mock.onAddClick).toHaveBeenCalledTimes(1);
    });
  });
});
