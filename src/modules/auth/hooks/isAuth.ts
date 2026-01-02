import { useUser } from "@/store/store";

export const useAuth = (): boolean => {
  const isAuth = useUser((state) => state.isAuth);

  return Boolean(isAuth);
};
