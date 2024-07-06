import { RouteObject } from "react-router";

const ApplicationWrapper = () =>
  import("../components/common/ApplicationWrapper");
const Home = () => import("../pages/Home");
const NotFound = () => import("../pages/NotFound");

export const routes: RouteObject[] = [
  {
    path: "/",
    lazy: ApplicationWrapper,
    children: [
      { path: "", lazy: Home },
      { path: "*", lazy: NotFound },
    ],
  },
];

type RouteKeys = Uppercase<"Home" | "NotFound">;
const buildRouteNames = (routes: RouteObject[], prefix = "") => {
  return routes.reduce(
    (acc, route) => {
      const key = route.lazy?.name?.toUpperCase();
      if (route.children) {
        acc = {
          ...acc,
          ...buildRouteNames(route.children, prefix + route.path),
        };
      } else if (key) {
        acc[key as RouteKeys] = route.path!;
      }
      return acc;
    },
    {} as Record<RouteKeys, string>
  );
};
export const RouteNames = Object.freeze(buildRouteNames(routes));
