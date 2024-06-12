// Propiedades y métodos de un usuario

export interface UserProps {
  name: string;
  user: string;
  password: string;
  masterPassword: string;
  selectedId: string;
}

export interface UserMethods {
  setName: (name: string) => void;
  setUser: (user: string) => void;
  setPassword: (password: string) => void;
  setMasterPassword: (masterPassword: string) => void;
  setSelectedId: (selectedId: string) => void;
  resetValues: () => void;
}

export type UserType = UserProps & UserMethods;

export const userInitialState: UserProps = {
  name: "",
  user: "",
  password: "",
  masterPassword: "",
  selectedId: "",
};

// Propidades y métodos que controlan el abrir y cerrar de ventanas

export interface DialogState {
  isWindowOpen: boolean;
  isWindowEditOpen: boolean;
  isAlertOpen: boolean;
  openWindow: () => void;
  closeWindow: () => void;
  openWindowEdit: () => void;
  closeWindowEdit: () => void;
  openAlert: () => void;
  closeAlert: () => void;
}
