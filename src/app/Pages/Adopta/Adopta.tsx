import { FilterPerritos } from "./components/FilterPerritos"
import { BannerPages } from "./../../components/BannerPages"

import Perro from "../../../assets/perro-adopta.png"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


export const Adopta = () => {
  const [token, setToken] = useState(false)
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate()


  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token !== null && token !== undefined && token !== "") {
      setToken(true)
    }
  }, [token])

  const handleCloseModal = async () => {
    setShowModal(false);
  };

  const handleInicioSesion = () => {
    navigate("/login")
  }
  return (
    <>
      {token ?
        <>
          <BannerPages
            perritoImg={Perro}
            title="¡Encuentra tu compañero perfecto en PetMatch!"
            text="Tu próximo amigo peludo está a solo un clic de distancia. En petMatch, simplificamos la adopción de mascotas. Encuentra a tu compañero perfecto de manera rápida y fácil."
          />
          <FilterPerritos />
          
        </>
        :

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
        </div>

      }
    </>
  )
}
