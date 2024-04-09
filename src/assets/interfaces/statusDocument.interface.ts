interface statusDocument {
    Destinatario: string;
    setDestinatario: (destinatario: string) => void;
    Asunto: string;
    setAsunto: (asunto: string) => void;
    idSolicitud: string;
    setIdSolicitud: (id: string) => void;
    Notas: string;
    setNotas: (notas: string) => void;
  }
  
  export const newStatusDocument: statusDocument = {
    Destinatario: "",
    setDestinatario: (destinatario: string) => {},
    Asunto: "",
    setAsunto: (asunto: string) => {},
    idSolicitud: "",
    setIdSolicitud: (id: string) => {},
    Notas: "",
    setNotas: (notas: string) => {},
  };
  