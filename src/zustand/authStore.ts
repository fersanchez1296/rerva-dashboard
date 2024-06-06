import { create } from "zustand";
import Cookies from "js-cookie";
interface authData {
  token: string;
  name: string;
  isAuth: boolean;
  setIsAuth: (auth: boolean) => void;
  setName: (name: string) => void;
  setToken: (token: string) => void;
  clearToken: () => void;
}

export const useAuthStore = create<authData>((set) => ({
  name: "",
  setName: (name) => {
    set({ name });
  },
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
