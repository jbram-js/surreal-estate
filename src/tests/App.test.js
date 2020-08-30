import React from "react";
import { render } from "@testing-library/react";
import Home from "../components/Home";

test("renders text", () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText("Surreal Estate");
  expect(linkElement).toBeInTheDocument();
});
