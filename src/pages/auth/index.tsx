import "./style/index.css";

import { LoginForm, RegisterForm } from "@/modules/auth";
import { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={isLogin ? "wrapper-auth_login" : "wrapper-auth_reg"}>
      <div className="authForms">
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
      <div className="authForms-transition">
        {isLogin ? (
          <div className="transition-login">
            <h2>Don`t have an account?</h2>
            <p>Sigh up to get started!</p>
            <button onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Sign up" : "Login"}
            </button>
          </div>
        ) : (
          <div className="transition-reg">
            <h2>Already have an account?</h2>
            <p>Login to your account!</p>
            <button onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Login" : "Sign up"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
