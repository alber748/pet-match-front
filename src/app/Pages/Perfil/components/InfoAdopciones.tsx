import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";

//Components
import { CardPerro } from "../../../components/CardPerro";
//Assets
import perroEjemplo from "../../../../assets/perro-ejemplo.jpeg";
import { Dog } from "../../../models/Dog";

interface Iadopciones {
  title: string;
  agregarPerros?: () => void;
}

const catalogo = [
  {
    id: 1,
    nombre: "Harry",
    edad: 2,
    raza: "Chihuahua",
    fotos: [
      perroEjemplo,
      "https://images.dog.ceo/breeds/chihuahua/n02085620_10131.jpg",
      "https://images.dog.ceo/breeds/chihuahua/n02085620_10158.jpg",
    ],
    descripcion: "Es un perro muy jugueton y cariñoso",
  },
  {
    id: 2,
    nombre: "Firulais",
    edad: 4,
    raza: "Pastor Aleman",
    fotos: [
      perroEjemplo,
      "https://images.dog.ceo/breeds/germanshepherd/n02106662_10131.jpg",
      "https://images.dog.ceo/breeds/germanshepherd/n02106662_10147.jpg",
    ],
    descripcion: "Es un perro muy jugueton y cariñoso",
  },
  {
    id: 3,
    nombre: "Pirata",
    edad: 3,
    raza: "Labrador",
    fotos: [
      perroEjemplo,
      "https://images.dog.ceo/breeds/labrador/n02099712_10131.jpg",
      "https://images.dog.ceo/breeds/labrador/n02099712_10147.jpg",
    ],
    descripcion: "Es un perro muy jugueton y cariñoso",
  },
  {
    id: 4,
    nombre: "Pirata",
    edad: 3,
    raza: "Labrador",
    fotos: [
      perroEjemplo,
      "https://images.dog.ceo/breeds/labrador/n02099712_10131.jpg",
      "https://images.dog.ceo/breeds/labrador/n02099712_10147.jpg",
    ],
    descripcion: "Es un perro muy jugueton y cariñoso",
  },
  {
    id: 5,
    nombre: "Pirata",
    edad: 3,
    raza: "Labrador",
    fotos: [
      perroEjemplo,
      "https://images.dog.ceo/breeds/labrador/n02099712_10131.jpg",
      "https://images.dog.ceo/breeds/labrador/n02099712_10147.jpg",
    ],
    descripcion: "Es un perro muy jugueton y cariñoso",
  },
];

export const InfoAdopciones = ({ title }: Iadopciones) => {
    const [mostrasPerros, setMostrarPerros] = useState(false);
    const [isPublicacion, setIsPublicacion] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [formData, setFormData] = useState<Dog>({
        id: 0,
        idPersona: 0,
        name: '',
        edad: '',
        peso: '',
        files: [],
        descripcion: '',
        situacion: ''
    });

    const handleMostrarPerros = (): void => {
        setMostrarPerros(prevState => !prevState);
    };

    const handlePublicacion = (): void => {
        setIsPublicacion(prevState => !prevState);
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const filesArray = Array.from(event.target.files);
            setSelectedFiles(prevFiles => [...prevFiles, ...filesArray]);
        }
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
        selectedFiles.forEach((file) => {
            formDataToSend.append('files', file);
        });

        // Agregar los nuevos campos al FormData
        formDataToSend.append('name', formData.name);
        formDataToSend.append('idPersona', String(formData.idPersona));
        formDataToSend.append('edad', formData.edad);
        formDataToSend.append('peso', formData.peso);
        formDataToSend.append('descripcion', formData.descripcion);
        formDataToSend.append('situacion', formData.situacion);

        console.log('Formulario a enviar:', formDataToSend);
        try {
            const response = await axios.post('https://pet-match-backend.onrender.com/api/dogs', formDataToSend);
            console.log(response.data);
        } catch (error) {
            console.error('Error al enviar archivos:', error);
        }
    };

    const renderForm = () => {
        if (!mostrasPerros) {
            if (isPublicacion) {
                return (
                    <form onSubmit={handleSubmit}>
                        <input type="file" onChange={handleFileChange} />
                        <input type="file" onChange={handleFileChange} />
                        <input type="file" onChange={handleFileChange} />
                        {/* Nuevos campos */}
                        <input type="text" name="name" placeholder="Nombre" onChange={handleChange} />
                        <input type="text" name="idPersona" placeholder="ID Persona" onChange={handleChange} />
                        <input type="text" name="edad" placeholder="Edad" onChange={handleChange} />
                        <input type="text" name="peso" placeholder="Peso" onChange={handleChange} />
                        <input type="text" name="descripcion" placeholder="Descripción" onChange={handleChange} />
                        <input type="text" name="situacion" placeholder="Situación" onChange={handleChange} />

                        <button type="submit">Enviar</button>
                    </form>
                );
            } else {
                return (
                    <>
                        {catalogo.slice(0, 4).map((perro) => (
                            <CardPerro key={perro.id} perro={perro} />
                        ))}
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#bb7b04" className="bi bi-arrow-right-circle" viewBox="0 0 16 16" onClick={handleMostrarPerros}>
                            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                        </svg>
                    </>
                );
            }
        } else if (mostrasPerros && !isPublicacion) {
            return (
                catalogo.map((perro) => (
                    <CardPerro key={perro.id} perro={perro} />
                ))
            );
        }
    };

    return (
        <div>
            <h1>{title}<span onClick={handlePublicacion}>+</span></h1>
            <div className={`d-flex align-items-center p-3 gap-5  ${!mostrasPerros ? "overflow-hidden" : "flex-wrap"}`}>
                {renderForm()}
            </div>
        </div>
    );
};

