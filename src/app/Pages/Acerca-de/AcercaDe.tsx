import { AcercaDePrimeraSection } from "./components/AcercaDePrimeraSection";
import { AcercaDeSegundaSection } from "./components/AcercaDeSegundaSection";
import { AcercaDeTerceraSection } from "./components/AcercaDeTerceraSection";

export const AcercaDe = () => {
  return (
    <div className="about-page">
      <AcercaDePrimeraSection
        title="En PetMatch nuestra mision es acercarte a tu nuevo comparñero"
        description="En PetMatch, nos dedicamos a proporcionar soluciones innovadoras y accesibles que faciliten el acceso a la información y promuevan el aprendizaje y el crecimiento personal. Creemos en hacer que el conocimiento sea más accesible para todos, sin importar su ubicación o situación."
      />
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
