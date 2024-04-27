import { useEffect, useState } from "react";
import React, { ChangeEvent } from 'react';
import axios from "axios"

//Assets
import { CatalogoCompleto } from "./CatalogoCompleto"

interface selectValues {
  edad: string,
  tamaño: string
}
interface perro {
  descripcion: string,
  edad: string,
  files: string[],
  idPersona: string,
  name: string,
  peso: string,
  situacion: string,
  __v: number,
  _id: string
}
export const FilterPerritos = () => {
  const [allPerros, setAllPerros] = useState([])
  const [filtroPerros, setFiltroPerros] = useState([])
  const [selectValues, setSelectValues] = useState<selectValues>({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pet-match-backend.onrender.com/api/dogs/get-all");
        const data = response.data.dogs
        setAllPerros(data)
        setFiltroPerros(data)
      } catch (error) {
        console.error("Hubo un error al obtener los datos:", error);
      }
    };
    fetchData();
  }, [])


  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectValues({
      ...selectValues,
      [event.target.name]: event.target.value
    })
  }


  const handleFiltro = () => {
    const perrosFiltrados = allPerros.filter((perro: perro) => {
      if (selectValues.edad === 'cachorro') {
        return Number(perro.edad) >= 1 && Number(perro.edad) <= 4;
      } else if (selectValues.edad === 'joven') {
        return Number(perro.edad) >= 4 && Number(perro.edad) <= 8;
      } else if (selectValues.edad === 'adulto') {
        return Number(perro.edad) > 8;
      } else {
        return true;
      }
    }).filter((perro: perro) => {
      if (selectValues.tamaño === 'chico') {
        return Number(perro.peso) <= 6;
      } else if (selectValues.tamaño === 'mediano') {
        return Number(perro.peso) > 6 && Number(perro.peso) <= 12;
      } else if (selectValues.tamaño === 'grande') {
        return Number(perro.peso) > 12;
      } else {
        return true;
      }
    });
    setFiltroPerros(perrosFiltrados)
  }
  return (
    <div className="mb-5">
      <div className="container-xxl d-flex justify-content-start align-items-center gap-5 pb-5 container-nav-adopta">
        <span>Filtrar tu búsqueda: </span>
        <select name="edad" id="" className="p-2" onChange={handleSelect}>
          <option value="a" selected disabled>Seleccione Tamaño</option>
          <option value="cachorro">Cachorro</option>
          <option value="joven">Joven</option>
          <option value="adulto">Adulto</option>
        </select>
        <select name="tamaño" id="" className="p-2" onChange={handleSelect}>
          <option value="a" selected disabled>Tamaño</option>
          <option value="chico">Chico</option>
          <option value="mediano">Mediano</option>
          <option value="grande">Grande</option>

        </select>
        <button className="btn btn-warning w-25 m-auto mt-3 mb-3 z-2 " onClick={handleFiltro}>Buscar</button>
      </div>
      <div className="mt-5">
        <CatalogoCompleto perros={filtroPerros} />
      </div>
    </div>
  )
}
