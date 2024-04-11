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
    ["Compilador/Editor/Coordinador/Libro"]: "",
    setCompilador: (compilador: string) =>
      set((state) => ({
        newDocument: {
          ...state.newDocument,
          ["Compilador/Editor/Coordinador/Libro"]: compilador,
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
    ["Área"]: "",
    setArea: (area: string) =>
      set((state) => ({
        newDocument: {
          ...state.newDocument,
          ["Área"]: area,
        },
      })),
    Campo: "",
    setCampo: (campo: string) =>
      set((state) => ({
        newDocument: {
          ...state.newDocument,
          Campo: campo,
        },
      })),
    Disciplina: "",
    setDisciplina: (disciplina: string) =>
      set((state) => ({
        newDocument: {
          ...state.newDocument,
          Disciplina: disciplina,
        },
      })),
    ["Año"]: "",
    setYear: (year: string) =>
      set((state) => ({
        newDocument: {
          ...state.newDocument,
          ["Año"]: year,
        },
      })),
    ["País de la Publicación"]: "",
    setPais: (pais: string) =>
      set((state) => ({
        newDocument: {
          ...state.newDocument,
          ["País de la Publicación"]: pais,
        },
      })),
    ["Municipios de estudio"]: "",
    setMunicipio: (municipio: string) =>
      set((state) => ({
        newDocument: {
          ...state.newDocument,
          ["Municipios de estudio"]: municipio,
        },
      })),
    ["Tipo de documento"]: "",
    setTipoDocumento: (documento: string) =>
      set((state) => ({
        newDocument: {
          ...state.newDocument,
          ["Tipo de documento"]: documento,
        },
      })),
    ["Clasificación"]: "",
    setClasificacion: (clasificacion: string) =>
      set((state) => ({
        newDocument: {
          ...state.newDocument,
          ["Clasificación"]: clasificacion,
        },
      })),
    ["Nombre de la revista/libro"]: "",
    setRevista: (revista: string) =>
      set((state) => ({
        newDocument: {
          ...state.newDocument,
          ["Nombre de la revista/libro"]: revista,
        },
      })),
    ["Libros/Editorial"]: "",
    setEditorial: (editorial: string) =>
      set((state) => ({
        newDocument: {
          ...state.newDocument,
          ["Libros/Editorial"]: editorial,
        },
      })),
    ["Tipo de consulta"]: "",
    setConsulta: (consulta: string) =>
      set((state) => ({
        newDocument: {
          ...state.newDocument,
          ["Tipo de consulta"]: consulta,
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
    ["Número de páginas"]: "",
    setPaginas: (paginas: string) =>
      set((state) => ({
        newDocument: {
          ...state.newDocument,
          ["Número de páginas"]: paginas,
        },
      })),
    Idioma: "",
    setIdioma: (idioma: string) =>
      set((state) => ({
        newDocument: {
          ...state.newDocument,
          Idioma: idioma,
        },
      })),
    Disponibilidad: "",
    setDisponibilidad: (disponibilidad: string) =>
      set((state) => ({
        newDocument: {
          ...state.newDocument,
          Disponibilidad: disponibilidad,
        },
      })),
    ["Palabras Clave"]: "",
    setPalabras: (palabras: string) =>
      set((state) => ({
        newDocument: {
          ...state.newDocument,
          ["Palabras Clave"]: palabras,
        },
      })),
    ["Tesis/Institución"]: "",
    setInstitucion: (institucion: string) =>
      set((state) => ({
        newDocument: {
          ...state.newDocument,
          ["Tesis/Institución"]: institucion,
        },
      })),
  },
}));
