import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/shared/Home";
import Login from "./pages/auth/Login";
import AddProduct from "./pages/shared/AddProduct";
import BrandProducts from "./pages/shared/BrandProducts";
import ProductDetails from "./pages/shared/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5500/brands"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/products/new",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/brands/:brandId",
        element: <BrandProducts></BrandProducts>,
        loader: ({ params }) => fetch(`http://localhost:5500/brands/${params.brandId}`),
      },
      {
        path: "/brands/:brandId/products/:productId",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) => fetch(`http://localhost:5500/brands/${params.brandId}/products/${params.productId}`),
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);