import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { DogSend } from "../../../models/Dog";
interface ModalPublicacionProps {
    cerrarModal: () => void;
    location: string
}
export const ModalPublicacion = ({ cerrarModal, location }: ModalPublicacionProps) => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [formData, setFormData] = useState<DogSend>({
        id: 0,
        idPersona: '',
        name: '',
        edad: '',
        peso: '',
        files: [],
        descripcion: '',
        situacion: ''
    });

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const filesArray = Array.from(event.target.files);
            setSelectedFiles(prevFiles => [...prevFiles, ...filesArray]);
        }
    };

    const handleFileChangePerfil = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setSelectedFile(file);
        }
    };
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmitPerfil = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formDataToSend = new FormData();
        
        if (selectedFile) {
            formDataToSend.append('file', selectedFile);
        }

        console.log("selectedFile", selectedFile)

        const uId = JSON.parse(localStorage.getItem('idUser') || '');
        if (uId !== null) {
            formDataToSend.append('idPersona', uId);
        } else {
            console.error('No se encontró ningún ID de usuario en el localStorage');
        }
        
        console.log('Formulario a enviar:', formDataToSend);
        try {
            const response = await axios.post('http://localhost:4000/api/user/add-photo', formDataToSend);
            console.log(response)
        } catch (error) {
            console.error('Error al enviar archivos:', error);
        }
    };


    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formDataToSend = new FormData();
        selectedFiles.forEach((file) => {
            formDataToSend.append('files', file);
        });
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

        console.log('Formulario a enviar:', formDataToSend);
        try {
            const response = await axios.post('https://pet-match-backend.onrender.com/api/dogs', formDataToSend);
            console.log(response)
        } catch (error) {
            console.error('Error al enviar archivos:', error);
        }
    };
    console.log(location)
    return (

        <div className="bg-modal d-flex justify-content-center align-items-center">
            <div className="modal show" tabIndex={-1} style={{ display: 'block' }}>
                <div className="modal-dialog  modal-lg mi-modal-personalizado">
                    <div className="modal-content px-3 pb-3">
                        <div className="modal-body d-flex flex-column  py-4 px-5 my-3 border-radius">
                            {location === "publicar" ?
                                <>
                                    <h1>Publicar Mascota</h1>
                                    <form className="d-flex flex-column align-items-center form-publicacion gap-4 mt-4" onSubmit={handleSubmit}>
                                        <div>
                                            <input type="file" onChange={handleFileChange} />
                                            <input type="file" onChange={handleFileChange} />
                                            <input type="file" onChange={handleFileChange} />
                                        </div>
                                        <div className="row w-100">
                                            <div className="col-6 p-4 d-flex flex-column gap-3 align-items-center">
                                                <input className="ps-2 w-75" type="text" name="name" placeholder="Nombre" onChange={handleChange} />
                                                <input className="ps-2 w-75" type="text" name="edad" placeholder="Edad" onChange={handleChange} />
                                                <input className="ps-2 w-75" type="text" name="peso" placeholder="Peso" onChange={handleChange} />
                                            </div>
                                            <div className="col-6 p-4 d-flex flex-column gap-3 align-items-center">
                                                <input className="ps-2 w-75" type="text" name="descripcion" placeholder="Descripción" onChange={handleChange} />
                                                <input className="ps-2 w-75" type="text" name="situacion" placeholder="Situación" onChange={handleChange} />
                                            </div>

                                        </div>
                                        <div className="d-flex justify-content-end gap-2">
                                            <button className="btn-adoptar p-2" type="submit">Publicar</button>
                                            <button className="btn-adoptar p-2" onClick={cerrarModal}>cerrar</button>
                                        </div>
                                    </form>

                                </> :
                                <form className="d-flex flex-column align-items-center form-publicacion gap-4 mt-4" onSubmit={handleSubmitPerfil}>
                                    <h4>Cambiar foto de perfil</h4>
                                    <div className="my-3">
                                        <input type="file" onChange={handleFileChangePerfil} />
                                    </div>
                                    <div className="d-flex justify-content-end gap-2">
                                        <button className="btn-adoptar p-2" type="submit">Publicar</button>
                                        <button className="btn-adoptar p-2" onClick={cerrarModal}>cerrar</button>
                                    </div>
                                </form>}
                        </div>
                    </div>
                </div>
            </div>
        </div >


    );
}