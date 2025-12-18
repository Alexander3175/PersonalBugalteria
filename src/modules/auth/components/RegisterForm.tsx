import "../styles/auth.css";

const RegisterForm = () => {
  return (
    <div className="reg-conteiner">
      <div className="reg-content">
        <h2>Sign up</h2>
        <form action="" method="post" className="authForm">
          <div className="field">
            <input type="text" name="username" required placeholder=" " />
            <label>Name</label>
          </div>
          <div className="field">
            <input type="email" name="email" required placeholder=" " />
            <label>Email</label>
          </div>
          <div className="field">
            <input type="password" name="password" required placeholder=" " />
            <label>Password</label>
          </div>
          <label className="checkbox">
            <input type="checkbox" name="terms" required />I accept all terms &
            conditions
          </label>
          <button type="submit">
            <span> Sign up</span>
          </button>
        </form>
      </div>
    </div>
  );
};
export default RegisterForm;
