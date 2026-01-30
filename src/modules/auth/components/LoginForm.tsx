import { useMutation } from "@tanstack/react-query";
import type { LoginData, UserLoginRequest } from "../types/api.type";
import { Login } from "../api/auth";
import { useUser } from "@/store/store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const setUser = useUser((state) => state.setUser);
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: (data: UserLoginRequest) => Login(data),
    onSuccess: (res: LoginData) => {
      toast.success("GOD");
      localStorage.setItem("accessToken", res.accessToken);
      setUser(res.user);
      navigate("/app");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Невідома помилка");
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
