import { lazy } from "solid-js";

export const routes = [
  {
    path: "/",
    component: lazy(() => import("./pages/home/Home")),
  },
  {
    path: "/blog",
    component: lazy(() => import("./pages/blog/Blog")),
  },
  {
    path: "/users",
    component: lazy(() => import("./pages/users/Users")),
  },
  {
    path:"/auth/sign-in",
    component:lazy(()=>import("./pages/sign-in"))
  }
];
