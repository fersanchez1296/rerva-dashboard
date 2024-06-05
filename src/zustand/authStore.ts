import { create } from "zustand";
import Cookies from "js-cookie";
interface authData {
  token: string;
  setToken: (token: string) => void;
  clearToken: () => void;
}

export const useAuthStore = create<authData>((set) => ({
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
