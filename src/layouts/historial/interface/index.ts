// Propiedades y métodos del componente historial

export interface HistorialProps {
  notas: string;
}

export interface HistorialMethods {
  setNotas: (notas: string) => void;
}

export type HistorialType = HistorialProps & HistorialMethods;

export const historialInitialState: HistorialProps = {
  notas: "",
};
// Propidades y métodos que controlan el abrir y cerrar de ventanas
export interface DialogState {
  isWindowOpen: boolean;
  openWindow: () => void;
  closeWindow: () => void;
}
