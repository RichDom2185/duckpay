import { RouteObject } from "react-router";

const Dashboard = () => import("../pages/Dashboard");
const Login = () => import("../pages/Login");
const NotFound = () => import("../pages/NotFound");

export const routes = [
  { path: "/", lazy: Dashboard },
  { path: "/login", lazy: Login },
  { path: "/not_found", lazy: NotFound },
] as const satisfies RouteObject[];

type RouteKeys = Uppercase<"Dashboard" | "Login" | "NotFound">;
export const RouteNames = Object.freeze(
  routes.reduce(
    (acc, route) => {
      const key = route.lazy?.name?.toUpperCase();
      if (key) {
        acc[key as RouteKeys] = route.path;
      }
      return acc;
    },
    {} as Record<RouteKeys, string>
  )
);
