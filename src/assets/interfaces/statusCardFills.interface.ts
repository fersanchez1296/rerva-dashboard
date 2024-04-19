interface statusCard {
  Destinatario: string;
  Asunto: string;
  idSolicitud: string;
  Notas: string;
}

export const statusCardFillsInterface: statusCard = {
  Destinatario: "",
  Asunto: "",
  idSolicitud: "",
  Notas: "Sin Notas",
};
