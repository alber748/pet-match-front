
interface CardPerroProps {
  perro : any;
}


export const CardPerro = ( { perro } : CardPerroProps ) => {
  return (
    <div key={perro.id} className="col z-3 ">
            <div className="card h-100">
              <img src={perro.fotos[0]} className="card-img-top" alt={perro.nombre} />
              <div className="card-body">
                <h5 className="card-title">{perro.nombre}</h5>
                <p className="card-text">{perro.edad} años</p>
                <p className="card-text">Raza: {perro.raza}</p>
                <p className="card-text">{perro.descripcion}</p>
              </div>
            </div>
    </div>
  )
}
