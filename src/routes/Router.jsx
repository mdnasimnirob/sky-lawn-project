import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";

import App from "../App";
import Home from "../pages/home/Home";
import Ehome from "../pages/ecommerce/Ehome";
import Eorder from "../pages/ecommerce/Eorder";
import Ecustomers from "../pages/ecommerce/Ecustomers";
import Ereports from "../pages/ecommerce/Ereports";
import Esettings from "../pages/ecommerce/Esettings";
import Estatus from "../pages/ecommerce/Estatus";




const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/dashboard",
        element: <App></App>
      },
      {
        path: "/home",
        element:<Home></Home>
      },
      {
        path: "/e-home",
        element:<Ehome></Ehome>
      },
      {
        path: "/e-order",
        element:<Eorder></Eorder>
      },
      {
        path: "/e-customers",
        element:<Ecustomers></Ecustomers>
      },
      {
        path: "/e-reports",
        element:<Ereports></Ereports>
      },
      {
        path: "/e-settings",
        element:<Esettings></Esettings>
      },
      {
        path: "/e-status",
        element:<Estatus></Estatus>
      },
    ],
  },
]);

export default Router;
