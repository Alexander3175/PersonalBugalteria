import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router";
import ErrorPage from "@pages/ErrorPage";

import App from "./App";
import WelcomePage from "@/pages/WelcomePage";
import AuthLayout from "./layouts/authLayout";
import AuthPage from "@/pages/auth";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <WelcomePage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [{ path: "", element: <AuthPage /> }],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

const router = createBrowserRouter(routes);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
