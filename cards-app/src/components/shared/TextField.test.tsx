import { fireEvent, render, RenderResult } from "@testing-library/react";
import React from "react";
import TextField, { ICustomTextField } from "./TextField";

const mockTextField: ICustomTextField = {
  value: "my test",
  id: "custom-textfield-id",
  label: "my label",
  name: "text-field-name",
  onValueChange: jest.fn(),
};

let wrapper: RenderResult;

describe("Custom TextField component", () => {
  describe("Check struct", () => {
    describe("Basic props and not required", () => {
      beforeEach(() => {
        const mockNewTextField = { ...mockTextField };
        wrapper = render(<TextField {...mockNewTextField} />);
      });
      test("render label", () => {
        expect(wrapper.getByText(mockTextField.label)).toBeInTheDocument();
      });
      test("render value", () => {
        expect(wrapper.getByDisplayValue(mockTextField.value)).toBeInTheDocument();
      });
      test("not render error class", () => {
        expect(wrapper.getByText(mockTextField.label)).not.toHaveClass("Mui-error Mui-error");
      });
    });
    describe("Basic props and required", () => {
      beforeEach(() => {
        const mockNewTextField = { ...mockTextField, required: true };
        wrapper = render(<TextField {...mockNewTextField} />);
      });
      test("render label with *", () => {
        expect(wrapper.getByText("*")).toBeInTheDocument();
      });
    });
    describe("Basic props and errorfield", () => {
      beforeEach(() => {
        const mockNewTextField = { ...mockTextField, errorFields: [{ fieldName: mockTextField.name, hasError: true }] };
        wrapper = render(<TextField {...mockNewTextField} />);
      });
      test("render error class", () => {
        expect(wrapper.getByText(mockTextField.label)).toHaveClass("Mui-error Mui-error");
      });
    });
  });
  describe("Check behavior", () => {
    beforeEach(() => {
      wrapper = render(<TextField {...mockTextField} />);
    });
    test("should call on change", () => {
      fireEvent.change(wrapper.getByDisplayValue(mockTextField.value), { target: { value: "23" } });
      expect(mockTextField.onValueChange).toHaveBeenCalledTimes(1);
    });
  });
});
