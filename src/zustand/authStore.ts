import { create } from "zustand";
import Cookies from "js-cookie";
interface authData {
  token: string;
  isAuth: boolean;
  setIsAuth: (auth: boolean) => void;
  setToken: (token: string) => void;
  clearToken: () => void;
}

export const useAuthStore = create<authData>((set) => ({
  isAuth: false,
  setIsAuth: (auth) => {
    set({ isAuth: auth });
  },
  token: Cookies.get("token") || null,
  setToken: (token) => {
    Cookies.set("token", token, { expires: 1 });
    set({ token });
  },
  clearToken: () => {
    Cookies.remove("token");
    set({ token: null });
  },
}));
