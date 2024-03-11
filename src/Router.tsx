import { createBrowserRouter } from "react-router-dom";
import Coins from "./Coins";
import Coin from "./Coin";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Coins />,
      },
      {
        path: ":coinId",
        element: <Coin />,
      },
    ],
  },
]);
