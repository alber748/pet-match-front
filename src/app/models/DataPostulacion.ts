import { Dog } from "./Dog";
import { Postulante } from "./Postulante";

export 
interface DataPostulacion  {
    estado : string;
    id : string;
    perro : Dog;
    usuario : Postulante;
}