// Propiedades y métodos del componente documentos y solicitudes

export interface DocumentProps {
  titulo: string;
  anio: string | number;
  autoria: string;
  autores: string;
  tipoDocumento: string;
  clasificacion: string;
  revista: string;
  editor: string;
  pais: string;
  editorial: string;
  tesis: string;
  tipoConsulta: string;
  link: string;
  doi: string;
  area: string;
  campo: string;
  disciplina: string;
  municipios: string;
  palabrasClave: string;
  disponibilidad: string;
  numeroPaginas: string;
  idioma: string;
}

export interface DocumentMethods {
  setDocumentFields: (field: string, value: string | number) => void;
  resetValues: () => void;
}

export type UserType = DocumentProps & DocumentMethods;

export const documentInitialState: DocumentProps = {
  titulo: "",
  anio: "",
  autoria: "Individual",
  autores: "",
  tipoDocumento: "",
  clasificacion: "",
  revista: "",
  editor: "",
  pais: "",
  editorial: "",
  tesis: "",
  tipoConsulta: "",
  link: "",
  doi: "",
  area: "",
  campo: "",
  disciplina: "",
  municipios: "",
  palabrasClave: "",
  disponibilidad: "",
  numeroPaginas: "",
  idioma: "",
};

//Propiedades y métodos del componente solicitudes

export interface SolicitudProps {
  id: string;
  titulo: string;
  email: string;
  autor: string;
  link: string;
  doi: string;
  status: string;
  notas: string;
}

export interface SolicitudMethods {
  setSolicitudFields: (field: string, value: string | number) => void;
  resetValues: () => void;
}

export type SolicitudType = SolicitudProps & SolicitudMethods;

export const solicitudInitialState: SolicitudProps = {
  id: "",
  titulo: "",
  email: "",
  autor: "",
  link: "",
  doi: "",
  status: "",
  notas: "Sin notas",
};

// Propidades y métodos que controlan el abrir y cerrar de ventanas

export interface DialogState {
  isWindowOpen: boolean;
  isWindowRejectOpen: boolean;
  isAlertOpen: boolean;
  openWindow: () => void;
  closeWindow: () => void;
  openWindowReject: () => void;
  closeWindowReject: () => void;
  openAlert: () => void;
  closeAlert: () => void;
}
