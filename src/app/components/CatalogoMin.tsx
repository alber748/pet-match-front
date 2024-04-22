import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import separador from "../../assets/recorte-seccion-down.png";
import perroEjemplo from "../../assets/perro-ejemplo.jpeg"
import { CardPerro } from "./CardPerro"

const catalogo = [
  {
    id: 1,
    nombre: 'Harry',
    edad: 2,
    raza: 'Chihuahua',
    fotos: [
      perroEjemplo,
      'https://images.dog.ceo/breeds/chihuahua/n02085620_10131.jpg',
      'https://images.dog.ceo/breeds/chihuahua/n02085620_10158.jpg'
    ],
    descripcion: 'Es un perro muy jugueton y cariñoso'
  },
  {
    id: 2,
    nombre: 'Firulais',
    edad: 4,
    raza: 'Pastor Aleman',
    fotos: [
      perroEjemplo,
      'https://images.dog.ceo/breeds/germanshepherd/n02106662_10131.jpg',
      'https://images.dog.ceo/breeds/germanshepherd/n02106662_10147.jpg'
    ],
    descripcion: 'Es un perro muy jugueton y cariñoso'
  },
  {
    id: 3,
    nombre: 'Pirata',
    edad: 3,
    raza: 'Labrador',
    fotos: [
      perroEjemplo,
      'https://images.dog.ceo/breeds/labrador/n02099712_10131.jpg',
      'https://images.dog.ceo/breeds/labrador/n02099712_10147.jpg'
    ],
    descripcion: 'Es un perro muy jugueton y cariñoso'
  }
]


export const CatalogoMin = () => {
  const location = useLocation();
  return (
    <>
      <div className="container-catalogo mx-auto mt-3 mb-5 ">
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5  ">
          {catalogo.map(perro => (
            <CardPerro key={perro.id} perro={perro} />
          ))}
        </div>
      </div>
      {location.pathname !== "/adopta" ? (
        <div className="position-relative d-flex flex-column">
          <Link to="/adopta" className="btn btn-warning w-25 m-auto mt-3 mb-3 z-2 ">Ver más</Link>
          <div className=" mg--10 z-1 bg-image-catalogo ">
            <div>
              <img src={separador} className="w-100 img-sep-down bg-image-catalogo bg-huellas" />

            </div>
          </div>
        </div>

      ) : null}
    </>
  )
}
