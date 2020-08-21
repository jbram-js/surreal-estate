import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders h2", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("Surreal Estate");
  expect(linkElement).toBeInTheDocument();
});
