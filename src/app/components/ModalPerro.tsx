//Assets
import collar from "../../assets/collar_3905219.png"
import huella from "../../assets/pawprint_1076928.png"
import silueta from "../../assets/silueta_perro.png"
import corazon from "../../assets/corazon.png"
import { Dog } from "../models/Dog";
import axios from "axios";
import { useState } from "react";



interface ModalPerroProps {
    perro: Dog;
    modal: boolean;
    cerrarModal: () => void;
}
interface NewPostulacion {
    idUser: string | null,
    idSitter: string,
    idPerro: string
}
export const ModalPerro = ({ perro, modal, cerrarModal }: ModalPerroProps) => {
    const [postulacion, setPostulacion] = useState<NewPostulacion>({
        idUser: '',
        idSitter: '',
        idPerro: ''
    })
    const newPostulacion = async () => {
        try {
            const response = await axios.post("https://pet-match-backend.onrender.com/api/postulaciones/new", postulacion)
            console.log(response)
        } catch (error) {
            console.error('No se pudo completar la postulación', error);
        }
    }

    const handleAdoptar = () => {
        const idUserFromLocalStorage = localStorage.getItem('idUser');
        let idUser: string | null = null;
        if (idUserFromLocalStorage) {
            try {
                idUser = JSON.parse(idUserFromLocalStorage);
                setPostulacion({
                    ...postulacion,
                    idUser: idUser,
                    idSitter: perro.idPersona,
                    idPerro: perro._id
                })
                newPostulacion()
            } catch (error) {
                console.error('Error al analizar el valor de idUser en localStorage:', error);
            }
        }
    }
    return (
        <div className="bg-modal w-100">
            <div className={`modal  ${modal ? 'show' : ''}`} tabIndex={-1} style={{ display: modal ? 'block' : 'none' }}>
                <div className="modal-dialog  modal-lg mi-modal-personalizado">
                    <div className="modal-content px-3 pb-3">
                        <div className="modal-body d-flex justify-content-arround py-4 px-5 my-3 border-radius">
                            <div id="carouselExampleIndicators" className="carousel slide container-carrousell">
                                <div className="carousel-indicators z-2 bg-modal-inicator ">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner z-1">
                                    <div className="carousel-item active">
                                        <img src={perro.files[0]} className="d-block img-modal" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={perro.files[1]} className="d-block  img-modal" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={perro.files[2]} className="d-block  img-modal" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="modal-details bg-modal-details d-flex flex-column gap-3 p-2 ms-5 w-50">
                                <div className="d-flex info-modal ps-2  align-items-center bg-p-details">
                                    <img src={collar} alt="" className="icon-modal" />
                                    <p className="my-0 ms-3">{perro.name.charAt(0).toUpperCase() + perro.name.slice(1).toLowerCase()}</p>
                                </div>
                                <div className="d-flex info-modal ps-2 align-items-center bg-p-details">
                                    <img src={huella} alt="" className="icon-modal " />
                                    <p className="my-0 ms-3">{perro.edad} años</p>
                                </div>
                                <div className="d-flex info-modal ps-2 align-items-center bg-p-details">
                                    <img src={silueta} alt="" className="icon-modal " />
                                    <p className="my-0 ms-3">{perro.peso} kg</p>
                                </div>
                                <div className="d-flex info-modal px-2 align-items-center bg-p-details">
                                    <img src={corazon} alt="" className="icon-modal" />
                                    <p className="my-0 ms-3">{perro.descripcion}</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer border-radius">
                            <button type="button" className="btn-adoptar p-2" onClick={handleAdoptar} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart me-2" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                </svg>
                                Adoptar
                            </button>
                            <button type="button" className="btn-adoptar p-2" onClick={cerrarModal}>Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}