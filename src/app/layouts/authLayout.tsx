import { Outlet } from "react-router";
import "../style/layouts.css";

const AuthLayout = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
