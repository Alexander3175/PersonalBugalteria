const LoginForm = () => {
  return (
    <div className="login-conteiner">
      <div className="login-content">
        <h2>Login</h2>
        <form action="" method="post" className="authForm">
          <div className="field">
            <input type="email" name="email" required placeholder=" " />
            <label>Email</label>
          </div>
          <div className="field">
            <input type="password" name="password" required placeholder=" " />
            <label>Password</label>
          </div>
          <a href="#">Forgot password?</a>
          <button type="submit">
            <span> Login</span>
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
