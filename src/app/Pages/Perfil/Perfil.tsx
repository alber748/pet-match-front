//Components
import { useState } from "react"
import { InfoAdopciones } from "./components/InfoAdopciones"

import { InformacionPerfil } from "./components/InformacionPerfil"
import { useNavigate } from "react-router-dom";
import { InfoPostulaciones } from "./components/InfoPostulaciones";




export const Perfil = () => {
  const [showModal, setShowModal] = useState(true);
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  const handleCloseModal = async () => {
    setShowModal(false);
  };

  const handleInicioSesion = () => {
    navigate("/login")
  }

  return (
    <div id="container-perfil" className="container-xxl">
      {token ?
        <>
          <div className="mx-auto w-75">
            <InformacionPerfil />
          </div>
          <div className="mb-5">
            <InfoPostulaciones
              title="Tus postulaciones para adoptar"
            />
          </div>
          <div className="mb-5">
            <InfoAdopciones
              title="Tus publicaciones de adopción"
            />
          </div>
        </> :
        <div className="modal" tabIndex={-1} role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Inicie sesión</h5>
              </div>
              <div className="modal-body">
                <p>Debe iniciar sesión para acceder a esta función.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cerrar</button>
                <button className="btn btn-secondary" onClick={handleInicioSesion}>Inicia Sesion</button>
              </div>
            </div>
          </div>
        </div>}
    </div>
  )
}
