import { AuthForm } from "@modules/auth";

function LoginPage() {
  return (
    <div className="login-wrapper">
      <div className="login-conteiner">
        <div className="login-content">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
