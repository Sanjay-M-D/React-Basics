import { fireEvent, render, screen } from "@testing-library/react";
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
  const loginButton = screen.getByRole("button", { name: "Login" });

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

  // Querying {/Cart/--->Regex}
  const cartItems = screen.getByText(/Cart/);

  // Assertion
  expect(cartItems).toBeInTheDocument();
});

it("Should change login Button to Logout Button on Click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <HeaderComponent />
      </Provider>
    </BrowserRouter>
  );

  // Querying
  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const LogoutButton = screen.getByRole("button", { name: "Logout" });

  // Assertion
  expect(LogoutButton).toBeInTheDocument();
});
