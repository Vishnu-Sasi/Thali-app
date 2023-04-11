import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import Thali from './Thali'
import CheckOut from "./CheckOut";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/customthali",
            element:<Thali/>
        },
        {
            path:"/checkout",
            element:<CheckOut/>
        }
    ],
  },
]);

export default router;
