import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import Root from "./components/Root.jsx";
import Home from "./components/Home.jsx";
import CategoryCards from "./components/CategoryCards.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Dashbord from "./components/Dashbord.jsx";
import CardStorage from "./components/CardStorage.jsx";
import StoreCards from "./components/StoreCards.jsx";
import WishCards from "./components/WishCards.jsx";
import Statistics from "./components/Statistics.jsx";
import Seller from "./components/Seller.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        loader: () => fetch('../gadgets.json'),
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        loader: () => fetch('../gadgets.json'),
        element: <Statistics></Statistics>,
      },

      {
        path: "/dashboard",
        element: <Dashbord></Dashbord>,
        children:[
          {
            path:"/dashboard",
            element: <StoreCards></StoreCards>,
          },
          {
            path:"/dashboard/storecards",
            element: <StoreCards></StoreCards>,
          },
          {
            path:"/dashboard/wishcards",
            element: <WishCards></WishCards>,
          },
        ],
      },

      {
        path: "/seller",
        element: <Seller></Seller>,
      },
      {
        path: "/laptop",
        loader: () => ('computers'),
        element: <CategoryCards></CategoryCards>
      },
      {
        path: "/phones",
        loader: () => ('phones'),
        element: <CategoryCards></CategoryCards>
      },
      {
        path: "/watches",
        loader: () => ('watches'),
        element: <CategoryCards></CategoryCards>
      },
      {
        path: "/chargers",
        loader: () => ('chargers'),
        element: <CategoryCards></CategoryCards>
      },
      {
        path: "/powerbanks",
        loader: () => ('power banks'),
        element: <CategoryCards></CategoryCards>
      },
      {
        path: "/accessories",
        loader: () => ('accessories'),
        element: <CategoryCards></CategoryCards>
      },
      {
        path: "/product/:productId",
        loader: () => fetch('../gadgets.json'),
        element: <ProductDetail></ProductDetail>,
      },
      {
        path: "/cards/:productId",
        // loader: () => fetch('/gadgets.json'),
        element: <CardStorage></CardStorage>,
      },
    ],
  },

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
