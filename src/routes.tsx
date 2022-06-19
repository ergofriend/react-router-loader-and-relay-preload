import { RouteObject } from "react-router-dom";

import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { AppsWrapper } from "./pages/AppsWrapper";
import { AppWrapper } from "./pages/AppWrapper";
import { ShipDetail, shipDetailLoader } from "./pages/ShipDetail";
import { ShipList, shipListQueryLoader } from "./pages/ShipList";
import { RocketDetail, rocketDetailLoader } from "./pages/RocketDetail";
import { RocketList, rocketListQueryLoader } from "./pages/RocketList";

export const appsRoute: RouteObject[] = [
  {
    path: "ship-app",
    element: <AppWrapper />,
    children: [
      {
        path: ":id",
        element: <ShipDetail />,
        loader: shipDetailLoader,
      },
      {
        path: "",
        element: <ShipList />,
        loader: shipListQueryLoader,
      },
    ],
  },
  {
    path: "rocket-app",
    element: <AppWrapper />,
    children: [
      {
        path: ":id",
        element: <RocketDetail />,
        loader: rocketDetailLoader,
      },
      {
        path: "",
        element: <RocketList />,
        loader: rocketListQueryLoader,
      },
    ],
  },
];

export const routes: RouteObject[] = [
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "*",
        element: <AppsWrapper />,
        children: appsRoute,
      },
    ],
  },
];
