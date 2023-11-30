import { render, screen } from "@testing-library/react";
import ContactComponent from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  it("Should load contact us component", () => {
    render(<ContactComponent />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load a button in contact us Component", () => {
    render(<ContactComponent />);

    const button = screen.getByRole("button");
    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load 2 input boxes in contact us Component", () => {
    render(<ContactComponent />);

    // Querying
    const inputs = screen.getAllByRole("textbox");
    console.log(inputs.length);

    // expect(inputs).toBeInTheDocument();
    expect(inputs.length).toBe(2);
  });
});
