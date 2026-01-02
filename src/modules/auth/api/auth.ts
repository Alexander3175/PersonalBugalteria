import api from "@/core/api/api";
import type { LoginResponse, UserRequest } from "../types/api.type";

const Login = async (data: UserRequest) => {
  const response = await api.post<LoginResponse>("/auth/login", data);
  return response.data.data;
};

export default Login;
