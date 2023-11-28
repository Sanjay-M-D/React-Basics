import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutClass from "./components/About";
import ErrorComponent from "./components/Error";
import ContactComponent from "./components/Contact";
import RestaurantMenuComponent from "./components/RestaurantMenu";
import ShimmerComponent from "./components/Shimmer";
// import GroceryComponent from "./components/Grocery";

// Chunking
// Code splitting
//Dynamic Bundling
// lazy Loading
// Dynamic Import

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => (
  <>
    <HeaderComponent />
    <Outlet />
    <FooterComponent />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <AboutClass />,
      },
      {
        path: "/contact",
        element: <ContactComponent />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<ShimmerComponent />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenuComponent />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
