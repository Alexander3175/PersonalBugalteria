import { useMutation } from "@tanstack/react-query";
import "../styles/auth.css";
import type { UserRegRequest } from "../types/api.type";
import { Regestration } from "../api/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const RegisterForm = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (data: UserRegRequest) => Regestration(data),
    onSuccess: () => {
      toast.success("GOD");
      navigate("/auth");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Невідома помилка");
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    mutate({
      username: String(formData.get("username")),
      email: String(formData.get("email")),
      password: String(formData.get("password")),
    });
  };

  return (
    <div className="reg-conteiner">
      <div className="reg-content">
        <h2>Sign up</h2>
        <form className="authForm" onSubmit={onSubmit}>
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
