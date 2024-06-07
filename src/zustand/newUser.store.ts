import { create, State } from "zustand";
import { newUser } from "assets/interfaces/newUser.interface";
import { userFillsInterface } from "assets/interfaces/newUserFills.interface";

type StateUser = userFillsInterface;

const userInitialState: StateUser = {
  name: "",
  user: "",
};

export const newUserStore = create<newUser>((set) => ({
  userStore: {
    ...userInitialState,
    setName: (name: string) =>
      set((state) => ({
        userStore: {
          ...state.userStore,
          name,
        },
      })),
    setUser: (user: string) =>
      set((state) => ({
        userStore: {
          ...state.userStore,
          user,
        },
      })),
    resetValues: () => set(userInitialState),
  },
}));
