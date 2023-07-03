import React from "react";
import { screen, waitFor } from "@testing-library/dom";
import { render } from "@testing-library/react";
import App from "./App";

//ToDOo: Update after SSO
describe("App", () => {
  it("renders control tower text", async () => {
    render(<App />);
    // const linkElement = screen.getByText(/Manscaped Dashboard/i);
    // expect(linkElement).toBeInTheDocument();
  });
});
