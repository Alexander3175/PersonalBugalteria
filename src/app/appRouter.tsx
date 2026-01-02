import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router";
import ErrorPage from "@pages/ErrorPage";

import WelcomePage from "@/pages/WelcomePage";
import AuthPage from "@/pages/auth";
import PublickLayout from "./layouts/publickLayout";
import ProtectedLayout from "./layouts/protectedLayout";

const routes: RouteObject[] = [
  {
    element: <PublickLayout />,
    children: [
      { path: "/", element: <WelcomePage /> },
      { path: "/auth", element: <AuthPage /> },
    ],
  },

  {
    path: "/app",
    element: <ProtectedLayout />,
    children: [{ index: true, element: <ErrorPage /> }],
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
];

const router = createBrowserRouter(routes);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
