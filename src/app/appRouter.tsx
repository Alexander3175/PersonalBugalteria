import { createBrowserRouter, RouterProvider, type RouteObject } from "react-router";
import App from "./App";

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '*',
    element: <div>404 — Сторінку не знайдено</div>
  }
];

const router = createBrowserRouter(routes)

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;