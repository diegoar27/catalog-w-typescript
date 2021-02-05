import { render, screen } from "@testing-library/react";
import React from "react";
import CardsProvider from "./CardsProvider";

test("CardsProvider shows children", () => {
  render(
    <CardsProvider>
      <span>test</span>
    </CardsProvider>,
  );
  expect(screen.findAllByText("test")).toBeTruthy();
});
