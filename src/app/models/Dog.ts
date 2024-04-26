export interface DogSend {
      id: number;
      idPersona : string;
      name: string;
      edad: string;
      peso: string;
      files: File[] ;
      descripcion: string;
      situacion: string;
}

export interface Dog {
      _id: number;
      idPersona : string;
      name: string;
      edad: string;
      peso: string;
      files: string[];
      descripcion: string;
      situacion: string;
}