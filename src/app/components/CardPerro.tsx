import { useRef, useEffect, useState } from 'react';

//Componentes
import { ModalPerro } from './ModalPerro';
import { Dog, DogSend } from '../models/Dog';
import ModalEditar from './ModalEditar';
import axios from 'axios';
import { ModalPerroPostulacion } from './ModalPerroPostulacion';
import { Postulante } from '../models/Postulante';


interface CardPerroProps {
  perro: Dog;
  kind: string;
  postulante?: Postulante;
  idPostulacion?: string;
  estado?: string;
}

export const CardPerro = ({ perro, kind, postulante, idPostulacion, estado }: CardPerroProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPostulacionVisible, setModalPostulacionVisible] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const imagenRef = useRef<HTMLImageElement | null>(null);

  const [dataInicial, setDataInicial] = useState<DogSend>({
    id: perro._id,
    name: perro.name,
    edad: perro.edad,
    peso: perro.peso,
    files: [],
    descripcion: perro.descripcion,
    situacion: perro.situacion,
    idPersona: perro.idPersona,
    urlsToDel: perro.files
  });

  const becomeUrlToFile = async () => {
    const urls = perro.files;


    const promises = urls.map(async (url) => {
      try {
        const response = await axios.get(url, { responseType: 'blob' });
        const blob = new Blob([response.data]);
        return new File([blob], 'imagen.jpg', { type: 'image/jpeg' });
      } catch (error) {
        console.error('Error al obtener la imagen:', error);
        return null;
      }
    });
    try {
      const files = await Promise.all(promises);

      // Filtra los archivos nulos y actualiza el estado
      if (files.length > 0) {
        setDataInicial((prevData) => ({
          ...prevData,
          files: files.filter((file) => file !== null) as File[],
        }));
      }

    } catch (error) {
      console.error('Error al obtener las imágenes:', error);
    }
  };

  const abrirModal = () => {
    setModalVisible(true);
    document.body.style.overflow = "hidden";
  };

  const cerrarModal = () => {
    setModalVisible(false);
    document.body.style.overflow = "auto";
  };
  const abrirModalEditar = () => {
    setModalEditar(true);
    document.body.style.overflow = "hidden";
  };
  const cerrarModalPostulacion = () => {
    setModalPostulacionVisible(false);
    document.body.style.overflow = "auto";
  };
  const abrirModalPostulacion = () => {
    setModalPostulacionVisible(true);
    document.body.style.overflow = "hidden";
  };

  const cerrarModalEditar = () => {
    setModalEditar(false);
    document.body.style.overflow = "auto";
  };
  useEffect(() => {
    const calcularBorderRadius = () => {
      const imagen = imagenRef.current;
      if (imagen) {
        const ancho = imagen.width;
        const alto = imagen.height;
        const radio = Math.min(ancho, alto) / 2;
        imagen.style.borderRadius = `${radio}px`;
      }
    };

    const imagen = imagenRef.current;
    if (imagen) {
      imagen.onload = calcularBorderRadius;
    }
    becomeUrlToFile();

  }, []);
  return (
    <>
      <div key={perro._id} className="col z-3  p-0">
        <div className="d-flex justify-content-center gap-3 position-relative conatiner-card">
          <img ref={imagenRef} src={perro.files[0]} alt={perro.name} />
          <div className=' d-flex justify-content-between perro-nombre px-3'>
            <p className='me-3'>{perro.name.charAt(0).toUpperCase() + perro.name.slice(1).toLowerCase()}, {perro.edad} años</p>
            {
              kind === "adopcion" ? 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle margin-icon-card" viewBox="0 0 16 16" onClick={abrirModal}>
              <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
            </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle margin-icon-card" viewBox="0 0 16 16" onClick={abrirModalPostulacion}>
              <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
            </svg>
            }
          </div>
        </div>
        { estado ? <p>Estado: { estado }</p> : "" }
      <button onClick={abrirModalEditar}> editar </button>
      </div>
      {modalVisible ? <ModalPerro perro={perro} modal={modalVisible} cerrarModal={cerrarModal} /> : ""}
      {modalPostulacionVisible ? <ModalPerroPostulacion perro={perro} idPostulacion={ idPostulacion! } solicitante = { postulante! } modal={modalPostulacionVisible} cerrarModal={cerrarModalPostulacion} /> : ""}
      {modalEditar ? <ModalEditar datosIniciales={dataInicial} modal={modalEditar} cerrarModal={cerrarModalEditar} /> : ""}
    </>

  )
}
