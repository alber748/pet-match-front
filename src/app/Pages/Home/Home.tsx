// Componentes Generales
import { BannerPages } from '../../components/BannerPages';

// Assets
import perritoImg from "../../../assets/perrito-home.jpeg";
import separador from "../../../assets/recorte-seccion.png";
import { CatalogoMin } from '../../components/CatalogoMin';
import { PorqueEscogernos } from './components/PorqueEscogernos';

export const Home = () => {
  return (
    <div className="home">
      <BannerPages perritoImg={ perritoImg } separador={ separador }
      title="¡Bienvenido a PetMatch!"
      text="PetMatch es una aplicación que te permite encontrar a tu nuevo mejor
      amigo, un perro que necesita un hogar."
      />
      <h2 className='title-section margin--10'>Conéctate al instante con tu nuevo mejor amigo peludo</h2>
      <p className='text-center'>
      Conéctate al instante con las personas que comparten perritos disponibles para adopción y encuentra a tu nuevo compañero de vida de forma rápida y sencilla
      </p>
      <CatalogoMin/>
      <PorqueEscogernos/>
    </div>
  );
};
