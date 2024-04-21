//Components
import { InfoAdopciones } from "./components/InfoAdopciones"

import { InformacionPerfil } from "./components/InformacionPerfil"
export const Perfil = () => {
  return (
    <div className="container-xxl">
      <div className="mx-auto w-75">
        <InformacionPerfil />
      </div>
      <div className="mb-5">
        <InfoAdopciones
          title="Tus postulaciones para adoptar"
        />
      </div>
      <div className="mb-5">
        <InfoAdopciones
          title="Tus publicaciones de adopción"
          
        />
      </div>
    </div>
  )
}
