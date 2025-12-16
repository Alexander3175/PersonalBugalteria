import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router";
import LoginPage from "@pages/LoginPage";
import ErrorPage from "@pages/ErrorPage";

import WelcomePage from "@/pages/WelcomePage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <WelcomePage />,
    children: [
      {
        path: "auth",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

const router = createBrowserRouter(routes);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
