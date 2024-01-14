import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ErrorPage from "./pages/404.jsx";
import ProductsPage from "./pages/products.jsx";
import ProfilePage from "./pages/profile.jsx";
import DetailProductPage from "./pages/detailProduct.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Layouts/Navbar.jsx";
import DarkModeProvider from "./context/DarkMode.jsx";
import { TotalPriceProvider } from "./context/TotalPriceContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="">HEllo World</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/*  */}
      <DarkModeProvider>
        <TotalPriceProvider>
          <RouterProvider router={router} />
        </TotalPriceProvider>
      </DarkModeProvider>
    </Provider>
  </React.StrictMode>
);
