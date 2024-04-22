// Componentes Generales
import { AcercaDePrimeraSection } from '../Acerca-de/components/AcercaDePrimeraSection';

// Assets

import { CatalogoMin } from '../../components/CatalogoMin';
import { PorqueEscogernos } from './components/PorqueEscogernos';

export const Home = () => {
  return (
    <div className="home">
      <AcercaDePrimeraSection
        title="En PetMatch nuestra mision es acercarte a tu nuevo comparñero"
        description="En PetMatch, nos dedicamos a proporcionar soluciones innovadoras y accesibles que faciliten el acceso a la información y promuevan el aprendizaje y el crecimiento personal. Creemos en hacer que el conocimiento sea más accesible para todos, sin importar su ubicación o situación."
      />
      <h2 className='title-section mt-4'>Conéctate al instante con tu nuevo mejor amigo peludo</h2>
      <p className='text-center'>
        Conéctate al instante con las personas que comparten perritos disponibles para adopción y encuentra a tu nuevo compañero de vida de forma rápida y sencilla
      </p>
      <CatalogoMin />
      <PorqueEscogernos />
    </div>
  );
};
