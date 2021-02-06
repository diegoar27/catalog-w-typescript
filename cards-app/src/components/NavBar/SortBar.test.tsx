import { fireEvent, render, RenderResult } from "@testing-library/react";
import React from "react";
import SortBar, { ISortBar } from "./SortBar";

const mock: ISortBar = {
  onChange: jest.fn(),
};

let wrapper: RenderResult;

describe("Sort bar component", () => {
  describe("Check struct", () => {
    beforeEach(() => {
      wrapper = render(<SortBar {...mock} />);
    });
    test("render sort button for id", () => {
      expect(wrapper.getByLabelText("id sort")).toBeInTheDocument();
    });
    test("render sort button for title", () => {
      expect(wrapper.getByLabelText("title sort")).toBeInTheDocument();
    });
    test("render sort direction button for asc", () => {
      expect(wrapper.getByLabelText("dir asc")).toBeInTheDocument();
    });
    test("render sort direction button for desc", () => {
      expect(wrapper.getByLabelText("dir desc")).toBeInTheDocument();
    });
  });
  describe("Check behavior", () => {
    beforeEach(() => {
      wrapper = render(<SortBar {...mock} />);
    });
    test.each([
      ["id sort", "id"],
      ["title sort", "title"],
    ])("should call on change %s when click", (button, field) => {
      fireEvent.click(wrapper.getByLabelText(button));
      expect(mock.onChange).toHaveBeenLastCalledWith({ field: field, direction: "asc" });
    });
    test.each([
      ["dir asc", "asc"],
      ["dir desc", "desc"],
    ])("should call on change %s when click", (button, dir) => {
      fireEvent.click(wrapper.getByLabelText(button));
      expect(mock.onChange).toHaveBeenLastCalledWith({ field: "id", direction: dir });
    });
  });
});
