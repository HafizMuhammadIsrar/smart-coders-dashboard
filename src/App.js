import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Overview from "./Components/Overview";
import Store from "./Components/Store";
import Order from "./Components/Order";
import Chates from "./Components/Chates";
import Wallet from "./Components/Wallet";
import Settings from "./Components/Settings";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/chates",
        element: <Chates />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
      {
        path: "/setting",
        element: <Settings />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
