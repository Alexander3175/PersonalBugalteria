import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/modules/auth/hooks/isAuth";

const PublickLayout = () => {
  const isAuthUser = useAuth();

  if (isAuthUser) {
    return <Navigate to="/app" replace />;
  }
  return <Outlet />;
};

export default PublickLayout;
