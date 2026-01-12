import { Navigate, Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "@/modules/auth/hooks/isAuth";
import Aside from "../components/Aside";
import "@app/style/protectedLayout.css";

const ProtectedLayout = () => {
  const isAuthUser = useAuth();

  if (!isAuthUser) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="protected-layout-wrapper">
      <Aside />
      <div className="protected-layout-container">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ProtectedLayout;
