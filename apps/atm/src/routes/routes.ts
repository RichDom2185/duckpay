import { RouteObject } from "react-router";

const ApplicationWrapper = () =>
  import("../components/common/ApplicationWrapper");
const Home = () => import("../pages/Home");
const Deposit = () => import("../../../atm/src/pages/Deposit");
const Claim = () => import("../../../atm/src/pages/Claim");
const Done = () => import("../../../atm/src/pages/Done");
const Withdraw = () => import("../../../atm/src/pages/Withdraw");
const NotFound = () => import("../pages/NotFound");

export const routes: RouteObject[] = [
  {
    path: "/",
    lazy: ApplicationWrapper,
    children: [
      { path: "", lazy: Home },
      { path: "deposit", lazy: Deposit },
      { path: "claim", lazy: Claim },
      { path: "done", lazy: Done },
      { path: "withdraw", lazy: Withdraw },
      { path: "*", lazy: NotFound }
    ]
  }
];

type RouteKeys = Uppercase<
  "Home" | "Deposit" | "Claim" | "Done" | "Withdraw" | "NotFound"
>;
const buildRouteNames = (routes: RouteObject[], prefix = "") => {
  return routes.reduce(
    (acc, route) => {
      const key = route.lazy?.name?.toUpperCase();
      if (route.children) {
        acc = {
          ...acc,
          ...buildRouteNames(route.children, prefix + route.path)
        };
      } else if (key) {
        acc[key as RouteKeys] = prefix + route.path!;
      }
      return acc;
    },
    {} as Record<RouteKeys, string>
  );
};
export const RouteNames = Object.freeze(buildRouteNames(routes));
