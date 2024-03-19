import { createBrowserRouter } from "react-router-dom";
import Coins from "./screens/Coins";
import Coin from "./screens/Coin";
import Chart from "./screens/Chart";
import Price from "./screens/Price";
import Root from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Coins />,
      },
      {
        path: ":coinId",
        element: <Coin />,
        children: [
          {
            path: "chart",
            element: <Chart />,
          },
          {
            path: "price",
            element: <Price />,
          },
        ],
      },
    ],
  },
]);
