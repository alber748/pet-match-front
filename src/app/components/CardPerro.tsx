import { useRef, useEffect, useState } from 'react';

//Componentes
import { ModalPerro } from './ModalPerro';

interface Perro {
  id: number,
  name: string;
  edad: number;
  peso: string;
  descripcion: string;
  files: string[];
}

interface CardPerroProps {
  perro: Perro;
}

export const CardPerro = ({ perro }: CardPerroProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const imagenRef = useRef<HTMLImageElement | null>(null);

  const abrirModal = () => {
    setModalVisible(true);
    document.body.style.overflow = "hidden";
  };

  const cerrarModal = () => {
    setModalVisible(false);
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
  }, []);
  return (
    <div>
      <div key={perro.id} className="col z-3 ">
        <div className="d-flex justify-content-center gap-3 position-relative conatiner-card">
          <img ref={imagenRef} src={perro.files[0]} alt={perro.name} />
          <div className=' d-flex justify-content-between perro-nombre px-3'>
            <p>{perro.name}, {perro.edad} años</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle margin-icon-card" viewBox="0 0 16 16" onClick={abrirModal}>
              <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
            </svg>
          </div>
        </div>

      </div>
      {modalVisible ? <ModalPerro perro={perro} modal={modalVisible} cerrarModal={cerrarModal} /> : ""}
    </div>

  )
}
