import { create } from "zustand";
import { DialogState, HistorialType, historialInitialState } from "../interface/index.ts";

export const useHistorialStore = create<HistorialType>((set) => ({
  ...historialInitialState,
  setNotas: (notas: string) =>
    set((state) => ({
      ...state,
      notas,
    })),
}));

export const useDialogStore = create<DialogState>((set) => ({
  isWindowOpen: false,
  openWindow: () => set({ isWindowOpen: true }),
  closeWindow: () => set({ isWindowOpen: false }),
}));
