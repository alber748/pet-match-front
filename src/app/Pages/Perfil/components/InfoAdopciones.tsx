import { useState, useEffect } from "react";
import axios from "axios";

//Components
import { ModalPublicacion } from "./ModalPublicacion"
import { CardInfo } from "../components/CardInfo"
import { CardPerro } from "../../../components/CardPerro";
import { DataPostulacion } from "../../../models/DataPostulacion";


interface Iadopciones {
    title: string;
    prop: string;
    agregarPerros?: () => void;
}


export const InfoAdopciones = ({ title, prop }: Iadopciones) => {
    const [mostrarPerros, setMostrarPerros] = useState(false);
    const [modalFormAddPerros, setModalFormAddPerros] = useState(false)

    const handleMostrarPerros = (): void => {
        setMostrarPerros(prevState => !prevState);
    };

    const handleModal = (): void => {
        setModalFormAddPerros(prevState => !prevState)
    };

    const [data, setData] = useState([] as DataPostulacion[]);
    const idUser = JSON.parse(localStorage.getItem('idUser') || '') || '';

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (prop === "postulacion") {
                    const response = await axios.get(`https://pet-match-backend.onrender.com/api/postulaciones/get-by-postulant?idUser=` + idUser);
                    const dogs = response.data;

                    console.log(dogs);

                    setData(dogs as DataPostulacion[]);
                }
                else {
                    const response = await axios.get(`https://pet-match-backend.onrender.com/api/dogs/get?idUser=` + idUser);

                    const dogs : DataPostulacion [] = response.data;
                    setData(dogs as DataPostulacion[]);


                }
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchData();
    }, []);

    const rendercardsPostulacion = () => {
        if (mostrarPerros) {
            return (
                <>
                    {Array.isArray(data) ?
                        (data.map((e, index) => {
                            return (
                                <CardInfo key={index} perro={e.perro} id={e.id} estado={e.estado} usuario={e.usuario} />
                            );
                        }))
                        : null}
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#bb7b04" className="bi bi-arrow-left-circle" viewBox="0 0 16 16" onClick={handleMostrarPerros}>
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                    </svg>
                </>
            );
        } else {
            const slicedData = Array.isArray(data) ? data.slice(0, 4) : [];

            return (
                <>
                    {Array.isArray(slicedData) ?
                        (slicedData.map((e, index) => (<CardInfo key={index} perro={e.perro} id={e.id} estado={e.estado} usuario={e.usuario} />)))
                        : null}

                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#bb7b04" className="bi bi-arrow-right-circle" viewBox="0 0 16 16" onClick={handleMostrarPerros}>
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                    </svg>
                </>
            );
        }
    };
    const rendercardsublicacion = () => {
        if (mostrarPerros) {
            return (
                <>
                        {
              data.map((dat, index) => (
                <CardPerro kind="adopcion" key={index} perro={dat.perro} />
              ))
            }

                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#bb7b04" className="bi bi-arrow-left-circle" viewBox="0 0 16 16" onClick={handleMostrarPerros}>
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                    </svg>
                </>
            );
        } else {

            return (
                <>
                    {Array.isArray(data) ? (
                        data.slice(0, 4).map((item, index) => (
                            console.log(item),
                            <CardPerro perro={item.perro} key={index} kind="adopcion" />
                        ))
                    ) : (
                        <li>No hay datos disponibles</li>
                    )}

                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#bb7b04" className="bi bi-arrow-right-circle" viewBox="0 0 16 16" onClick={handleMostrarPerros}>
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                    </svg>
                </>
            );
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
            <div className={`d-flex justify-content-start align-items-center gap-3 w-100 p-4 ${mostrarPerros ? "flex-wrap " : "overflow-hidden"}`}>
                {prop === "postulacion" ? rendercardsPostulacion() : rendercardsublicacion()}
                {modalFormAddPerros ? <ModalPublicacion cerrarModal={handleModal} location={"publicar"} /> : ""}
            </div>
        </div >
    );
};

