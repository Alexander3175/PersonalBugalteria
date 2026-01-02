import type { UserResponse } from "@/modules/auth";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  user: UserResponse | null;
  isAuth: boolean;
};

type Actions = {
  setUser: (user: UserResponse) => void;
  logout: () => void;
};

export const useUser = create<State & Actions>()(
  persist(
    (set) => ({
      user: null,
      isAuth: false,

      setUser: (user) => set({ user, isAuth: true }),
      logout: () => set({ user: null, isAuth: false }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
