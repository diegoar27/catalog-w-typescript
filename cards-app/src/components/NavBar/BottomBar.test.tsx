import { fireEvent, render, RenderResult } from "@testing-library/react";
import React from "react";
import BottomBar, { IBottomAppBar } from "./BottomBar";

const mock: IBottomAppBar = {
  onAddClick: jest.fn(),
};

let wrapper: RenderResult;

describe("Bottom nav bar component", () => {
  describe("Check struct", () => {
    beforeEach(() => {
      wrapper = render(<BottomBar {...mock} />);
    });
    test("render add card button", () => {
      expect(wrapper.getByLabelText("add-card")).toBeInTheDocument();
    });
  });
  describe("Check behavior", () => {
    beforeEach(() => {
      wrapper = render(<BottomBar {...mock} />);
    });
    test("should call on add card", () => {
      fireEvent.click(wrapper.getByLabelText("add-card"));
      expect(mock.onAddClick).toHaveBeenCalledTimes(1);
    });
  });
});
