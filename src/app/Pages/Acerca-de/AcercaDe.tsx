import { BannerPages } from "../../components/BannerPages";
import { AcercaDeSegundaSection } from "./components/AcercaDeSegundaSection";
import { AcercaDeTerceraSection } from "./components/AcercaDeTerceraSection";

import perritoImg from "../../../assets/perrito-home.png"
import separador from "../../../assets/recorte-seccion.png";
export const AcercaDe = () => {
  return (
    <div className="about-page">
      <BannerPages perritoImg={perritoImg} separador={separador} title="ACERCADE NUESTRA MISION" text="lorem" />
      <AcercaDeSegundaSection
        title="Nuestro Equipo"

        description="Conoce al increíble equipo detrás de PetMatch. Desde desarrolladores y diseñadores hasta expertos en inteligencia artificial, nuestro equipo trabaja arduamente para ofrecerte la mejor experiencia posible. Descubre quiénes somos, qué nos motiva y cómo estamos cambiando el mundo."
      />
      <AcercaDeTerceraSection
        title="Contacto"

        description="¿Tienes alguna pregunta, comentario o sugerencia? Estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros a través del formulario de contacto a continuación o mediante nuestros datos de contacto directo. ¡Esperamos poder atenderte y resolver cualquier consulta que tengas!"
      />
    </div>
  );
}
