import { Navigate, Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "@/modules/auth/hooks/isAuth";

const ProtectedLayout = () => {
  const isAuthUser = useAuth();

  if (!isAuthUser) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default ProtectedLayout;
