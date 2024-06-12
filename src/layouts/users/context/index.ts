import { create } from "zustand";
import { UserType, userInitialState, DialogState } from "../interface/index.ts";
export const useUserStore = create<UserType>((set) => ({
  ...userInitialState,
  setName: (name: string) =>
    set((state) => ({
      ...state,
      name,
    })),
  setUser: (user: string) =>
    set((state) => ({
      ...state,
      user,
    })),
  setPassword: (password: string) =>
    set((state) => ({
      ...state,
      password,
    })),
  setMasterPassword: (masterPassword: string) =>
    set((state) => ({
      ...state,
      masterPassword,
    })),
  setSelectedId: (selectedId: string) =>
    set((state) => ({
      ...state,
      selectedId,
    })),
  resetValues: () =>
    set((state) => ({
      ...userInitialState,
      setName: state.setName,
      setUser: state.setUser,
      setPassword: state.setPassword,
      setMasterPassword: state.setMasterPassword,
      setSelectedId: state.setSelectedId,
      resetValues: state.resetValues,
    })),
}));

export const useDialogStore = create<DialogState>((set) => ({
  isWindowOpen: false,
  isWindowEditOpen: false,
  isAlertOpen: false,
  openWindow: () => set({ isWindowOpen: true }),
  closeWindow: () => set({ isWindowOpen: false }),
  openWindowEdit: () => set({ isWindowEditOpen: true }),
  closeWindowEdit: () => set({ isWindowEditOpen: false }),
  openAlert: () => set({ isAlertOpen: true }),
  closeAlert: () => set({ isAlertOpen: false }),
}));
