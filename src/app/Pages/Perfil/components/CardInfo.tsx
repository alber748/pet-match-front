import { useState } from "react";
import axios from "axios";

interface CardInfo {
    estado?: string,
    id?: string,
    perro: {
        descripcion: string,
        edad: string,
        id: string,
        name: string,
        peso: string,
        situacion: string,
        fotos: string[];
    },
    usuario: {
        email: string,
        id: string,
        lastname: string,
        location: string,
        name: string,
        phone: string,
    },

}

export const CardInfo = ({ estado, id, perro, usuario }: CardInfo) => {
    const [showInfoPerro, SetshowInfoPerro] = useState(false)
    const [showInfoDador, SetshowInfoDador] = useState(false)
    const handlePerro = () => {
        SetshowInfoPerro(prevState => !prevState)
    }
    const handleDador = () => {
        SetshowInfoDador(prevState => !prevState)
    }

    const eliminarPostulacion = async () => {
        try {
            const response = await axios.post(`https://pet-match-backend.onrender.com/api/postulaciones/delete?id=` + id);
            window.location.reload();
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <>
            <div className="card-info-perfil">
                <div className="d-flex jusify-content-center container-fotos ">
                    <img className="img-fluid " src={perro.fotos[0]} alt="" />
                </div>
                <div>
                    <div>
                        <h3>{perro.name.charAt(0).toUpperCase() + perro.name.slice(1).toLowerCase()}</h3>
                        <span>{estado}</span>
                    </div>
                    {showInfoPerro ?
                        <div>
                            <h5>Info perro</h5>
                            <p>{perro.descripcion}</p>
                            <p>{perro.edad}</p>
                            <p>{perro.name}</p>
                            <p>{perro.peso}</p>
                            <p>{perro.situacion}</p>
                        </div> : ""

                    }
                    {showInfoDador ?
                        <div>
                            <h5>Info dador</h5>
                            <p>{usuario.email}</p>
                            <p>{usuario.lastname}</p>
                            <p>{usuario.location}</p>
                            <p>{usuario.name}</p>
                            <p>{usuario.phone}</p>
                        </div>
                        : ""}

                    < div >
                        <button onClick={handlePerro}>
                            Ver info perro
                        </button>
                        <button onClick={handleDador}>
                            Ver info dador
                        </button>
                        <button onClick={eliminarPostulacion}>
                            Cancelar Postulacion
                        </button>
                    </div>
                </div>
            </div >
        </>
    )
}




