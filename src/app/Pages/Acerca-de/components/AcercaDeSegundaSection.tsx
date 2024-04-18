import logo from "../../../../assets/logo-user.png"
import separador1 from "../../../../assets/recorte-seccion.png"
import separador2 from "../../../../assets/recorte-seccion.png"
interface SectionProps {
    title: string;
    description: string;
}

export const AcercaDeSegundaSection: React.FC<SectionProps> = ({ title, description }) => {
    return (
        <div className="w-100 ">
            <div className="container-section ">
                <div className="separador ">
                    <img src={separador1} className="img-separate" />
                </div>
                <div className="container-xxl container-participantes position-relative">
                    <div>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                    <div className="d-flex  flex-column align-items-start mt-5 ms-5 p-5 gap-5 position-relative ">
                        <div className="row w-100 gap-5 justify-content-center">
                            <div className="d-flex gap-4 card-participantes p-4 col-5 ">
                                <img src={logo} className="logo-user z-2" alt={title} />
                                <div className="d-flex flex-column align-items-center card-info card-info-1 z-1">
                                    <h3 className="mt-3">Jeronimo Mana</h3>
                                    <p className="m-0">Font-End</p>
                                    <p className="m-0">21 años</p>
                                    <a href="" className="m-0">Linkedin</a>
                                </div>
                            </div>
                            <div className="d-flex gap-4 flex-row-reverse card-participantes p-4 col-5 ">
                                <img src={logo} className="logo-user  z-2" alt={title} />
                                <div className="d-flex flex-column align-items-center card-info card-info-2 z-1">
                                    <h3 className="mt-3 ms-2">Jeronimo Mana</h3>
                                    <p className="m-0 ms-2">Font-End</p>
                                    <p className="m-0 ms-2">21 años</p>
                                    <a href="" className="m-0 ms-2">Linkedin</a>
                                </div>
                            </div>

                        </div>
                        <div className="row w-100 gap-5 justify-content-center position-relative">
                            <div className="d-flex gap-4 card-participantes p-4 col-5 ">
                                <img src={logo} className="logo-user z-2" alt={title} />
                                <div className="d-flex flex-column align-items-center card-info card-info-3 z-1">
                                    <h3 className="mt-3">Jeronimo Mana</h3>
                                    <p className="m-0">Font-End</p>
                                    <p className="m-0">21 años</p>
                                    <a href="" className="m-0">Linkedin</a>
                                </div>
                            </div>
                            <div className="d-flex gap-4 flex-row-reverse card-participantes p-4 col-5 ">
                                <img src={logo} className="logo-user z-2" alt={title} />
                                <div className="d-flex flex-column align-items-center card-info card-info-4 z-1">
                                    <h3 className="mt-3 ms-2">Jeronimo Mana</h3>
                                    <p className="m-0 ms-2">Font-End</p>
                                    <p className="m-0 ms-2">21 años</p>
                                    <a href="" className="m-0 ms-2">Linkedin</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="separador">
                <img src={separador2} alt="" className="img-separate rotate" />
            </div>
        </div>
    )
}