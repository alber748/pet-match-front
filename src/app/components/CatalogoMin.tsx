import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import separador from "../../assets/recorte-seccion-down.png";
import { CardPerro } from "./CardPerro"
import { useEffect, useState } from "react";
import axios from "axios";




export const CatalogoMin = () => {
  const location = useLocation();
  const [allPerros, setAllPerros] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pet-match-backend.onrender.com/api/dogs/get-all");
        const data = response.data.dogs
        setAllPerros(data)
        console.log(data)
      } catch (error) {
        console.error("Hubo un error al obtener los datos:", error);
      }
    };

    fetchData();
  }, [])
  return (
    <>
      <div className="container-catalogo mx-auto mt-3 mb-5 ">
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5  ">
          {allPerros.map((perro, index) => (
            <CardPerro key={index} perro={perro} />
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
