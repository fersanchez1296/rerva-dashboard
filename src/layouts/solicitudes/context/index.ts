import { create } from "zustand";
import {
  DocumentType,
  documentInitialState,
  SolicitudType,
  solicitudInitialState,
  DialogState,
} from "../interface/index.ts";
export const useDocumentStore = create<DocumentType>((set) => ({
  ...documentInitialState,
  setDocumentFields: (field: string, value: string) =>
    set((state) => ({
      ...state,
      [field]: value,
    })),
  resetValues: () =>
    set((state) => ({
      ...documentInitialState,
      setField: state.setField,
      resetValues: state.resetValues,
    })),
}));

export const useSolicitudStore = create<SolicitudType>((set) => ({
  ...solicitudInitialState,
  setSolicitudFields: (field: string, value: string) =>
    set((state) => ({
      ...state,
      [field]: value,
    })),
  resetValues: () =>
    set((state) => ({
      ...solicitudInitialState,
      setField: state.setField,
      resetValues: state.resetValues,
    })),
}));

export const useDialogStore = create<DialogState>((set) => ({
  isWindowOpen: false,
  isWindowRejectOpen: false,
  isAlertOpen: false,
  openWindow: () => set({ isWindowOpen: true }),
  closeWindow: () => set({ isWindowOpen: false }),
  openWindowReject: () => set({ isWindowRejectOpen: true }),
  closeWindowReject: () => set({ isWindowRejectOpen: false }),
  openAlert: () => set({ isAlertOpen: true }),
  closeAlert: () => set({ isAlertOpen: false }),
}));
