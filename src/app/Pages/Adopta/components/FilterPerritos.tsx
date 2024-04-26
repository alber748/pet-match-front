//Assets

export const FilterPerritos = () => {
  return (
    <div className="mb-5">
      <div className="container-xxl d-flex justify-content-start align-items-center gap-5 pb-5 container-nav-adopta">
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
