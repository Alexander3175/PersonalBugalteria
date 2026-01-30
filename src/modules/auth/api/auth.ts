import api from "@/core/api/api";
import type {
  LoginResponse,
  RegResponse,
  UserLoginRequest,
  UserRegRequest,
} from "../types/api.type";

export const Login = async (data: UserLoginRequest) => {
  const response = await api.post<LoginResponse>("/auth/login", data);
  return response.data.data;
};

export const Regestration = async (data: UserRegRequest) => {
  const response = await api.post<RegResponse>("/auth/registration", data);
  return response.data.data;
};
