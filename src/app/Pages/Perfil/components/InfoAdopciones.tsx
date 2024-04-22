import { useState } from "react";


//Components
import { CardPerro } from "../../../components/CardPerro";
import { ModalPublicacion } from "./ModalPublicacion"
//Assets
import perroEjemplo from "../../../../assets/perro-ejemplo.jpeg";


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
    const [modalFormAddPerros, setModalFormAddPerros] = useState(false)

    const handleMostrarPerros = (): void => {
        setMostrarPerros(prevState => !prevState);
    };

    const handleModal = (): void => {
        setModalFormAddPerros(prevState => !prevState)
    };


    const rendercards = () => {
        if (mostrasPerros) {
            return (
                <>
                    {catalogo.map((perro) => (
                        <CardPerro key={perro.id} perro={perro} />
                    ))}
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#bb7b04" className="bi bi-arrow-left-circle" viewBox="0 0 16 16" onClick={handleMostrarPerros}>
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                    </svg>
                </>
            )
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
            )
        }
    }

    return (
        <div>
            <div className="d-flex  justify-content-between">
                <h1>{title}</h1>
                {title === "Tus publicaciones de adopción" ?
                    <button className="btn-adoptar px-2 me-3" onClick={handleModal}>Publicar</button>
                    : ""}
            </div>
            <div className={`d-flex align-items-center  p-3 gap-5  ${!mostrasPerros ? "overflow-hidden" : "flex-wrap"}`}>
                {rendercards()}
                {modalFormAddPerros ? <ModalPublicacion cerrarModal={handleModal} /> : ""}
            </div>
        </div >
    );
};

