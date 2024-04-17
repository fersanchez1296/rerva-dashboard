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
    Notas: "Sin Notas",
    setNotas: (nota: string) =>
      set((state) => ({
        statusCard: {
          ...state.statusCard,
          Notas: nota,
        },
      })),
    resetValues: () => {
      set({
        statusCard: {
          Destinatario: "",
          Asunto: "",
          idSolicitud: "",
          Notas: "Sin Notas",
        },
      });
    },
  },
  newDocument: {
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
    setField: (field: string, value: string) =>
      set((state) => ({
        newDocument: {
          ...state.newDocument,
          [field]: value,
        },
      })),
    resetValues: () =>
      set({
        newDocument: {
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
        },
      }),
  },
}));
