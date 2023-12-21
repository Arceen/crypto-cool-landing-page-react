import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
export default AppRouter;
