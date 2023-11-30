import { render, screen } from "@testing-library/react";
import HeaderComponent from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
// import { StaticRouter } from "react-router-dom/server";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render the header Component with loginButton", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <HeaderComponent />
      </Provider>
    </BrowserRouter>
  );

  // Querying
  const loginButton = screen.getByRole("button");

  // Assertion
  expect(loginButton).toBeInTheDocument();
});

it("Should render the header Component with Cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <HeaderComponent />
      </Provider>
    </BrowserRouter>
  );

  // Querying
  const cartItems = screen.getByText(/Cart/);

  // Assertion
  expect(cartItems).toBeInTheDocument();
});
