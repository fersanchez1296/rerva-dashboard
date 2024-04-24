interface statusCard {
  Destinatario: string;
  Asunto: string;
  idSolicitud: string;
  Notas: string;
  Autor: string;
  Titulo: string;
}

export const statusCardFillsInterface: statusCard = {
  Destinatario: "",
  Asunto: "",
  idSolicitud: "",
  Notas: "Sin Notas",
  Autor: "",
  Titulo: "",
};
