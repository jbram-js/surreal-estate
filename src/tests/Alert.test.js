import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  it("displays error message", () => {
    const { getByText, asFragment } = render(<Alert message="Error!" />);
    expect(asFragment()).toMatchSnapshot();
    expect(getByText(/Error/).textContent).toBe("Error!");
  });

  it("displays success message", () => {
    const { getByText, asFragment } = render(
      <Alert message="Success!!!" success />
    );

    expect(asFragment()).toMatchSnapshot();
    expect(getByText(/Success/).textContent).toBe("Success!!!");
  });

  it("does not render is message is not truthy", () => {
    const { asFragment } = render(<Alert message="" />);
    const alert = asFragment();
    expect(alert).toMatchSnapshot();
    expect(asFragment()).toMatchSnapshot();
  });
});
