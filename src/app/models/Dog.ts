export interface DogSend {
      id: string;
      idPersona : string;
      name: string;
      edad: string;
      peso: string;
      files: File[] ;
      descripcion: string;
      situacion: string;
      urlsToDel? : string[];
}

export interface Dog {
      _id: string;
      idPersona : string;
      name: string;
      edad: string;
      peso: string;
      files: string[];
      descripcion: string;
      situacion: string;
}