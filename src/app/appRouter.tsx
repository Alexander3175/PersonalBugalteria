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
import TestPage from "@/pages/test";
import DashboardPage from "@/pages/ProtectedPages/DashboardPage";

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
    children: [{ index: true, element: <DashboardPage /> }],
  },

  {
    path: "*",
    element: <ErrorPage />,
  },

  {
    path: "/test",
    element: <TestPage />,
  },
];

const router = createBrowserRouter(routes);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
