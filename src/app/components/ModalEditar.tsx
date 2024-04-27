import React, { useState, FormEvent, } from 'react';
import axios from 'axios';
import { DogSend } from '../models/Dog';
import CustomFileInput from './CustomFileInput';

interface Props {
    cerrarModal: () => void;
    modal : boolean;
    datosIniciales: DogSend;
}

const ModalEditar: React.FC<Props> = ({ cerrarModal, datosIniciales, }) => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [formData, setFormData] = useState<DogSend>(datosIniciales);
    const [urlDelete , setUrlDelete] = useState<string[]>([]);

    const handleFileChange = (nombreArchivo: string, nuevaImagen: File | null, url : string ) => {
        setSelectedFiles(prevFiles => {
          if (nuevaImagen) {
            // Agregar nueva imagen al array
            setUrlDelete([...urlDelete, url]);
            return [...prevFiles, nuevaImagen];
          } else {
            // Eliminar imagen del array (si es null)
            return prevFiles.filter(file => file !== nuevaImagen);
          }
        });
      };
      
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formDataToSend = new FormData();
        console.log('selectedFiles:', selectedFiles);

        const uId = JSON.parse(localStorage.getItem('idUser') || '');
        if (uId !== null) {
            formDataToSend.append('idPersona', uId);
        } else {
            console.error('No se encontró ningún ID de usuario en el localStorage');
        }
        formDataToSend.append('name', formData.name);
        formDataToSend.append('edad', formData.edad);
        formDataToSend.append('peso', formData.peso);
        formDataToSend.append('descripcion', formData.descripcion);
        formDataToSend.append('situacion', formData.situacion);
        formDataToSend.append('id', formData.id);

        selectedFiles.forEach((file) => {
            formDataToSend.append('files', file);
        });
        urlDelete.forEach((url) => {
            formDataToSend.append('urlsToDel', url);
        })
        console.log('Fotos a enviar:', selectedFiles);
        console.log('Formulario a enviar:', formDataToSend);
        try {
            const response = await axios.post("http://localhost:4000/api/dogs/edit-perro", formDataToSend);
            console.log(response);
            cerrarModal();
        } catch (error) {
            console.error('Error al enviar archivos:', error);
        }
    };

    return (
        <div className="bg-modal d-flex justify-content-center align-items-center">
            <div className="modal show" tabIndex={-1} style={{ display: 'block' }}>
                <div className="modal-dialog  modal-lg mi-modal-personalizado">
                    <div className="modal-content px-3 pb-3">
                        <div className="modal-body d-flex flex-column  py-4 px-5 my-3 border-radius">
                        <form className="d-flex flex-column align-items-center form-publicacion gap-4 mt-4" onSubmit={handleSubmit}>
            <div>
            <div>
            <CustomFileInput
                  onChange={handleFileChange}
                  currentFile={formData.files[0]}
                  url={ datosIniciales.urlsToDel![0] }
                />
            <CustomFileInput
                  onChange={handleFileChange}
                  currentFile={formData.files[1]}
                  url={ datosIniciales.urlsToDel![1] }
                />
            <CustomFileInput
                  onChange={handleFileChange}
                  currentFile={formData.files[2]}
                  url={ datosIniciales.urlsToDel![2] }
                />
            </div>

            </div>
            <div className="row w-100">
                <div className="col-6 p-4 d-flex flex-column gap-3 align-items-center">
                    <input className="ps-2 w-75" type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} />
                    <input className="ps-2 w-75" type="text" name="edad" placeholder="Edad" value={formData.edad} onChange={handleChange} />
                    <input className="ps-2 w-75" type="text" name="peso" placeholder="Peso" value={formData.peso} onChange={handleChange} />
                </div>
                <div className="col-6 p-4 d-flex flex-column gap-3 align-items-center">
                    <input className="ps-2 w-75" type="text" name="descripcion" placeholder="Descripción" value={formData.descripcion} onChange={handleChange} />
                    <input className="ps-2 w-75" type="text" name="situacion" placeholder="Situación" value={formData.situacion} onChange={handleChange} />
                </div>
            </div>
            <div className="d-flex justify-content-end gap-2">
                <button className="btn-adoptar p-2" type="submit">Guardar cambios</button>
                <button className="btn-adoptar p-2" onClick={cerrarModal}>Cerrar</button>
            </div>
        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ModalEditar;
