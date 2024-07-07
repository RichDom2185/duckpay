import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { routes } from "./routes/routes";

const router = createBrowserRouter(routes, {
  future: { v7_relativeSplatPath: true }
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
