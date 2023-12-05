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
import Cart from "./pages/shared/Cart";
import SignUp from "./pages/auth/SignUp";
import AuthProvider from "./providers/AuthProvider";
import ErrorPage from "./pages/ErrorPage";
import UpdateProduct from "./pages/shared/UpdateProduct";
import PrivateRoute from "./routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://quality-cravings.vercel.app/brands"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/products/new",
        element: <AddProduct></AddProduct>,
        loader: () => fetch("https://quality-cravings.vercel.app/brands"),
      },
      {
        path: "/brands/:brandId",
        element: <BrandProducts></BrandProducts>,
        loader: ({ params }) => fetch(`https://quality-cravings.vercel.app/brands/${params.brandId}/products`),
      },
      {
        path: "/products/:productId",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://quality-cravings.vercel.app/products/${params.productId}`),
      },
      {
        path: "/products/:productId/edit",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) => fetch(`https://quality-cravings.vercel.app/products/${params.productId}`),
      },
      {
        path: "/cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);