import { create, State } from "zustand";
import { newDocumentInterface } from "assets/interfaces/newDocument.interface";
import { statusDocument } from "assets/interfaces/statusDocument.interface";
import { statusCardFillsInterface } from "assets/interfaces/statusCardFills.interface";
import { newDocumentFillsInterface } from "assets/interfaces/newDocumentFills.interface";

type StateStatusCrad = statusCardFillsInterface;
type StateNewDocument = newDocumentFillsInterface;

const statusCardInitialState: StateStatusCrad = {
  Destinatario: "",
  Asunto: "",
  idSolicitud: "",
  Notas: "Sin Notas",
  Autor: "",
  Titulo: "",
};

const newDocumentInitialState: StateNewDocument = {
  Autores: "",
  ["Compilador/Editor/Coordinador/Libro"]: "",
  ["Tipo de Autoría"]: "",
  ["Título"]: "",
  ["Área"]: "",
  Campo: "",
  Disciplina: "",
  ["Año"]: "",
  ["País de la Publicación"]: "",
  ["Municipios de estudio"]: "",
  ["Tipo de documento"]: "",
  ["Clasificación"]: "",
  ["Nombre de la revista/libro"]: "",
  ["Libros/Editorial"]: "",
  ["Tipo de consulta"]: "",
  Link: "",
  Doi: "",
  ["Número de páginas"]: "",
  Idioma: "",
  Disponibilidad: "",
  ["Palabras Clave"]: "",
  ["Tesis/Institución"]: "",
};

export const newDocumentStore = create<newDocumentInterface & statusDocument>((set) => ({
  statusCard: {
    ...statusCardInitialState,
    setDestinatario: (destinatario: string) =>
      set((state) => ({
        statusCard: {
          ...state.statusCard,
          Destinatario: destinatario,
        },
      })),
    setAutor: (autor: string) =>
      set((state) => ({
        statusCard: {
          ...state.statusCard,
          Autor: autor,
        },
      })),
    setTitulo: (titulo: string) =>
      set((state) => ({
        statusCard: {
          ...state.statusCard,
          Titulo: titulo,
        },
      })),
    setAsunto: (asunto: string) =>
      set((state) => ({
        statusCard: {
          ...state.statusCard,
          Asunto: asunto,
        },
      })),
    setIdSolicitud: (id: string) =>
      set((state) => ({
        statusCard: {
          ...state.statusCard,
          idSolicitud: id,
        },
      })),
    setNotas: (nota: string) =>
      set((state) => ({
        statusCard: {
          ...state.statusCard,
          Notas: nota,
        },
      })),
    resetValues: () => set(statusCardInitialState),
  },
  newDocument: {
    ...newDocumentInitialState,
    setField: (field: string, value: string) =>
      set((state) => ({
        newDocument: {
          ...state.newDocument,
          [field]: value,
        },
      })),
    resetValues: () => set(newDocumentInitialState),
  },
}));
