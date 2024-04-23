// Componentes Generales
import { AcercaDePrimeraSection } from '../Acerca-de/components/AcercaDePrimeraSection';

// Assets

import { CatalogoMin } from '../../components/CatalogoMin';
import { PorqueEscogernos } from './components/PorqueEscogernos';
import separador from "../../../assets/recorte-seccion.png"

export const Home = () => {
  return (
    <div className="home">
      <AcercaDePrimeraSection
        title="tu nuevo compañero te espera"
        description=", nos dedicamos a proporcionar soluciones innovadoras y accesibles que faciliten el acceso a la información y promuevan el aprendizaje y el crecimiento personal. Creemos en hacer que el conocimiento sea más accesible para todos, sin importar su ubicación o situación."
      />
      <div className='d-flex flex-column align-items-center  bg-catalogo segunda-home'>
        <img src={separador} alt="" className="w-100 img-sep-top mb-4 " />
        <h2 className='title-section p-2 m-3'>Conéctate al instante con tu nuevo mejor amigo peludo</h2>
        <p className='text-center p-2 m-3 txt-segunda-seccion'>
          Conéctate al instante con las personas que comparten perritos disponibles para adopción y encuentra a tu nuevo compañero de vida de forma rápida y sencilla
        </p>
        <CatalogoMin />
        
      </div>
      <PorqueEscogernos />
    </div>
  );
};
