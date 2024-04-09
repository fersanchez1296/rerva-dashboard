interface newDocument {
  Título: string;
  setTitulo: (titulo: string) => void;
  Año: string | number;
  setYear: (year: string | number) => void;
  "Tipo de autoría": string;
  setAutoria: (autoria: string) => void;
  Autores: string;
  setAutores: (autores: string) => void;
  "Tipo de documento": string;
  setTipoDocumento: (tipoDocumento: string) => void;
  Clasificación: string;
  setClasificacion: (clasificacion: string) => void;
  "Nombre de la revista/libro": string;
  setRevista: (revista: string) => void;
  "Compilador/Editor/Coordinador/Libro": string;
  setCompilador: (compilador: string) => void;
  "País de la Publicación": string;
  setPais: (pais: string) => void;
  "Libros/Editorial": string;
  setEditorial: (editorial: string) => void;
  "Tesis/Institución": string;
  setInstitucion: (institucion: string) => void;
  "Tipo de consulta": string;
  setTipoConsulta: (tipoConsulta: string) => void;
  "Link de acceso": string;
  setLink: (link: string) => void;
  DOI: string;
  setDoi: (doi: string) => void;
  Área: string;
  setArea: (area: string) => void;
  Campo: string;
  setCampo: (campo: string) => void;
  Disciplina: string;
  setDisciplina: (disciplina: string) => void;
  "Municipios de estudio": string;
  setMunicipios: (municipios: string) => void;
  "Palabras Clave": string;
  setPalabras: (palabras: string) => void;
  Disponibilidad: string;
  setDisponibilidad: (disponibilidad: string) => void;
  "Número de páginas": string;
  setPaginas: (paginas: string) => void;
  Idioma: string;
  setIdioma: (idioma: string) => void;
}

export const newDocumentInterface: newDocument = {
  Título: "",
  setTitulo: (titulo: string) => {},
  Año: "",
  setYear: (year: string | number) => {},
  "Tipo de autoría": "",
  setAutoria: (autoria: string) => {},
  Autores: "",
  setAutores: (autores: string) => {},
  "Tipo de documento": "",
  setTipoDocumento: (tipoDocumento: string) => {},
  Clasificación: "",
  setClasificacion: (clasificacion: string) => {},
  "Nombre de la revista/libro": "",
  setRevista: (revista: string) => {},
  "Compilador/Editor/Coordinador/Libro": "",
  setCompilador: (compilador: string) => {},
  "País de la Publicación": "",
  setPais: (pais: string) => {},
  "Libros/Editorial": "",
  setEditorial: (editorial: string) => {},
  "Tesis/Institución": "",
  setInstitucion: (institucion: string) => {},
  "Tipo de consulta": "",
  setTipoConsulta: (tipoConsulta: string) => {},
  "Link de acceso": "",
  setLink: (link: string) => {},
  DOI: "",
  setDoi: (doi: string) => {},
  Área: "",
  setArea: (area: string) => {},
  Campo: "",
  setCampo: (campo: string) => {},
  Disciplina: "",
  setDisciplina: (disciplina: string) => {},
  "Municipios de estudio": "",
  setMunicipios: (municipios: string) => {},
  "Palabras Clave": "",
  setPalabras: (palabras: string) => {},
  Disponibilidad: "",
  setDisponibilidad: (disponibilidad: string) => {},
  "Número de páginas": "",
  setPaginas: (paginas: string) => {},
  Idioma: "",
  setIdioma: (idioma: string) => {},
};
