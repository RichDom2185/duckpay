import { setBackendUrl } from "@repo/api";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";
import { store } from "./redux/store";
import { routes } from "./routes/routes";
import Constants from "./utils/constants";

setBackendUrl(Constants.BACKEND_URL);

const router = createBrowserRouter(routes);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
