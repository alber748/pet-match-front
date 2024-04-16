//Assets
import Perro from "../../../../assets/perro-adopta.png"

export const FilterPerritos = () => {
  return (
    <div className="mb-5">
      <div className="d-flex flex-row-reverse container-xxl  bg-img-adopta">
        <div>
          <img src={Perro} alt="" />
        </div>
        <div className="d-flex flex-column justify-content-center banner-txt-adopta">
          <span className=" mb-5">Encuentra tu compañero perfecto en PetMatch</span>
          <p>Tú próximo amigo peludo está a solo un clic de distancia. En petMatch, simplificamos la adopción de mascotas. Encuentra a tu compañero perfecto de manera rápida y fácil.</p>
        </div>
      </div>
      <div className="container-xxl d-flex justify-content-start gap-5 pb-5 container-nav-adopta">
        <span>Filtrar tu búsqueda: </span>
        <select name="" id="" className="p-2">
          <option value="" disabled>Seleccione Tamaño</option>
          <option value="">Pequeño</option>
          <option value="">Mediano</option>
          <option value="">Grande</option>
        </select>
        <input type="number" className="p-2" placeholder="Ingrese edad" />
        <select name="" id="" className="p-2">
          <option value="" disabled>Condición</option>
          <option value="">Persona</option>
          <option value="">Fundación</option>
        </select>
        <button className="btn btn-warning w-25 m-auto mt-3 mb-3 z-2 ">Buscar</button>
      </div>

    </div>
  )
}
