import { create } from "zustand";
import { newDocumentInterface } from "assets/interfaces/newDocument.interface";
import { statusDocument } from "assets/interfaces/statusDocument.interface";

export const newDocumentStore = create<newDocumentInterface & statusDocument>((set) => ({
  statusCard: {
    Destinatario: "",
    setDestinatario: (destinatario: string) =>
      set((state) => ({
        statusCard: {
          ...state.statusCard,
          Destinatario: destinatario,
        },
      })),
    Asunto: "",
    setAsunto: (asunto: string) =>
      set((state) => ({
        statusCard: {
          ...state.statusCard,
          Asunto: asunto,
        },
      })),
    idSolicitud: "",
    setIdSolicitud: (id: string) =>
      set((state) => ({
        statusCard: {
          ...state.statusCard,
          idSolicitud: id,
        },
      })),
  },
  newDocument: {
    Autores: "",
    setAutores: (autores: string) =>
      set((state) => ({
        newDocument: {
          ...state.newDocument,
          Autores: autores,
        },
      })),
    ["Tipo de Autoría"]: "",
    setAutoria: (autoria: string) =>
      set((state) => ({
        newDocument: {
          ...state.newDocument,
          ["Tipo de Autoría"]: autoria,
        },
      })),
    ["Título"]: "",
    setTitulo: (titulo: string) =>
      set((state) => ({
        newDocument: {
          ...state.newDocument,
          ["Título"]: titulo,
        },
      })),
    Link: "",
    setLink: (link: string) =>
      set((state) => ({
        newDocument: {
          ...state.newDocument,
          Link: link,
        },
      })),
    Doi: "",
    setDoi: (doi: string) =>
      set((state) => ({
        newDocument: {
          ...state.newDocument,
          Doi: doi,
        },
      })),
  },
}));
