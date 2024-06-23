import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes/routes";

const router = createBrowserRouter(routes);
const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
