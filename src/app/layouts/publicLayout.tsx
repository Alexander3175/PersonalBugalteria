import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/modules/auth/hooks/isAuth";

const PublicLayout = () => {
  const isAuthUser = useAuth();

  if (isAuthUser) {
    return <Navigate to="/app" replace />;
  }
  return <Outlet />;
};

export default PublicLayout;
