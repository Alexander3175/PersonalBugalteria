import { useMutation } from "@tanstack/react-query";
import type { LoginData, UserRequest } from "../types/api.type";
import Login from "../api/auth";
import { useUser } from "@/store/store";

const LoginForm = () => {
  const setUser = useUser((state) => state.setUser);

  const { mutate } = useMutation({
    mutationFn: (data: UserRequest) => Login(data),
    onSuccess: (res: LoginData) => {
      localStorage.setItem("accessToken", res.accessToken);
      setUser(res.user);
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    mutate({
      email: String(formData.get("email")),
      password: String(formData.get("password")),
    });
  };

  console.log(useUser.getState().user);
  console.log(useUser.getState().isAuth);
  return (
    <div className="login-conteiner">
      <div className="login-content">
        <h2>Login</h2>
        <form className="authForm" onSubmit={onSubmit}>
          <div className="field">
            <input type="email" name="email" required placeholder=" " />
            <label>Email</label>
          </div>
          <div className="field">
            <input type="password" name="password" required placeholder=" " />
            <label>Password</label>
          </div>
          <button type="button" className="link">
            Forgot password?
          </button>
          <button type="submit">
            <span> Login</span>
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
