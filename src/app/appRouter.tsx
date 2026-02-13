import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router";
import ErrorPage from "@pages/ErrorPage";

import WelcomePage from "@/pages/WelcomePage";
import AuthPage from "@/pages/auth";
import PublicLayout from "./layouts/publicLayout";
import ProtectedLayout from "./layouts/protectedLayout";
import DashboardPage from "@/pages/ProtectedPages/DashboardPage";
import OperationPage from "@/pages/ProtectedPages/OperationPage";

const routes: RouteObject[] = [
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <WelcomePage /> },
      { path: "/auth", element: <AuthPage /> },
    ],
  },

  {
    path: "/app",
    element: <ProtectedLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "operation", element: <OperationPage /> },
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
