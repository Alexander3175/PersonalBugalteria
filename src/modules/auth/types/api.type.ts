export interface UserLoginRequest {
  email: string;
  password: string;
}

export interface UserRegRequest {
  username: string;
  email: string;
  password: string;
}

export interface UserResponse {
  id: number;
  username?: string;
}

export interface LoginData {
  accessToken: string;
  user: UserResponse;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export type LoginResponse = ApiResponse<LoginData>;
export type RegResponse = ApiResponse<UserResponse>;
