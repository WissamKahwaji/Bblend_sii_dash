import React from "react";
import { baseURL } from "./API/baseURL";
import useApiFetch from "./hooks/useApiFetch";
import { colorsActions } from "./Store/colorsSlice";
import { logoActions } from "./Store/logoSlice";
import { brandingActions } from "./Store/brandingSlice";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Pages/Root";
import Welcome from "./Pages/Welcome";
import Controls from "./Pages/Controls";
import AddProduct, { addProductsAction } from "./Pages/AddProduct";
import EditProducts, { editProductsLoader } from "./Pages/EditProducts";
import EditProductForm, {
  editProductFormAction,
  editProductFormLoader,
} from "./Pages/EditProductForm";
import DeleteProduct, {
  deleteProductAction,
  deleteProductsLoader,
} from "./Pages/DeleteProduct";
import Orders, { ordersAction, ordersLoader } from "./Pages/Orders";
import PageContainer from "./Components/UI/PageContainer";
import SingleOrder, { singleOrderLoader } from "./Pages/SingleOrder";
import AdminPage from "./Pages/AdminPage";
import AddOffer, { addOfferAction } from "./Pages/AddOffer";
import DeleteOffer, {
  deleteOffersAction,
  deleteOffersLoader,
} from "./Pages/DeleteOffer";
import EditContactInfo, {
  editContactInfoLoader,
} from "./Pages/EditContactInfo";
import GeneralInfo, {
  generalInfoAction,
  generalInfoLoader,
} from "./Pages/GeneralInfo";

const App = () => {
  const router = createBrowserRouter([
    {
      index: "/",
      element: <Welcome />,
    },
    {
      path: "/controls",
      element: <Controls />,
      children: [
        {
          path: "/controls/check_orders",
          element: <Orders />,
          loader: ordersLoader,
          action: ordersAction,
        },
        {
          path: "/controls/add_product",
          element: <AddProduct />,
          action: addProductsAction,
        },

        {
          path: "/controls/edit_products",
          element: <EditProducts />,
          loader: editProductsLoader,
        },
        {
          path: "/controls/edit_products/:productId",
          element: <EditProductForm />,
          loader: editProductFormLoader,
          action: editProductFormAction,
        },
        {
          path: "/controls/delete_product",
          element: <DeleteProduct />,
          loader: deleteProductsLoader,
          action: deleteProductAction,
        },

        {
          path: "/controls/check_orders/:userId/:orderId",
          element: <SingleOrder />,
          loader: singleOrderLoader,
        },
        {
          path: "/controls/add_offer",
          element: <AddOffer />,
          action: addOfferAction,
        },
        {
          path: "/controls/delete_offer",
          element: <DeleteOffer />,
          loader: deleteOffersLoader,
          action: deleteOffersAction,
        },
        {
          path: "/controls/edit_Contact",
          element: <EditContactInfo />,
          loader: editContactInfoLoader,
        },
        {
          path: "/controls/edit_general_info",
          element: <GeneralInfo />,
          loader: generalInfoLoader,
          action: generalInfoAction,
        },
      ],
    },
  ]);
  const { dataColors, errorColors, isLoadingColors } = useApiFetch(
    `${baseURL}/colors.json`,
    colorsActions.storeColors
  );
  const { dataLogo, errorLogo, isLoadingLogo } = useApiFetch(
    `${baseURL}/logo.json`,
    logoActions.storeLogo
  );
  const { dataBranding, errorBranding, isLoadingBranding } = useApiFetch(
    `${baseURL}/branding.json`,
    brandingActions.storeBranding
  );
  return <RouterProvider router={router} />;
};

export default App;
