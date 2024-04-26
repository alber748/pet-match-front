import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import separador from "../../assets/recorte-seccion-down.png";
import { CardPerro } from "./CardPerro"
import { useEffect, useState } from "react";
import axios from "axios";




export const CatalogoMin = () => {
  const location = useLocation();
  const [allPerros, setAllPerros] = useState([])
  const [width, setWidth] = useState<number>(window.innerWidth)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pet-match-backend.onrender.com/api/dogs/get-all");
        const data = response.data.dogs
        setAllPerros(data)
      } catch (error) {
        console.error("Hubo un error al obtener los datos:", error);
      }
    };


    fetchData();
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const cantCards = () => {
    const ultimoIndex = allPerros.length - 1;
    const anteUltimoIndex = ultimoIndex - 2;
    const ultimosDos = allPerros.slice(anteUltimoIndex, ultimoIndex);
    const ultimosCuatro = allPerros.slice(anteUltimoIndex - 1, ultimoIndex + 1);
    return width && width > 825 ? ultimosCuatro : ultimosDos;
  };

  return (
    <>
      <div className="container-catalogo mx-auto mt-3 mb-5 ">
        {location.pathname === "/" ?
          <div className={`row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  mb-5 w-100`}>
            {(cantCards().map((perro, index) => (
              <CardPerro key={index} perro={perro} />
            )))}
          </div> :
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-gap-4 ">
            {
              allPerros.map((perro, index) => (
                <CardPerro key={index} perro={perro} />
              ))
            }
          </div>}
      </div>
      {location.pathname !== "/adopta" ? (
        <div className="w-100 position-relative d-flex flex-column">
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
