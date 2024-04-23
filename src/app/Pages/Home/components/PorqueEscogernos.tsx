import perrito from "../../../../assets/cachorro.png";


export const PorqueEscogernos = () => {
  return (
    <>
      <div className="w-100 bg-huellas mg--20 z-1 tecera-seccion-home">
        <h2 className="text-center mt-5 ">Porque escogernos</h2>
        <p className="text-center">Te mostramos porque somos tu mejor opcion para buscar un amigo peludo</p>
        <div className="d-flex justify-content-center align-items-center banner-home m-auto" >
          <div className="flex col-4">
            <div className="tercera-data d-flex flex-column ms-5">
              <span className="align-self-start">1.</span>
              <h3 className="align-self-center me-5">Rápido y fácil</h3>
              <p className="align-self-center text-start"> Simplificamos el proceso de adopción para que encuentres tu compañero peludo en poco tiempo.</p>
            </div>
            <div className="tercera-data d-flex flex-column me-5">
              <span className="align-self-start">3.</span>
              <h3 className="align-self-center me-4">Contacto directo</h3>
              <p className="align-self-center text-start">Facilitamos la comunicación entre donantes y receptores para una experiencia personalizada.</p>
            </div>
          </div>
          <div className="flex col-4 p-5">
            <img src={perrito} className="w-100" />
          </div>
          <div className="flex col-4">
            <div className="tercera-data d-flex flex-column me-5">
              <span className="align-self-end">2.</span>
              <h3 className="align-self-center ms-5">Transparente</h3>
              <p className="align-self-center text-end"> Proporcionamos información detallada y verificada sobre cada perro disponible.</p>
            </div>
            <div className="tercera-data d-flex flex-column ms-5">
              <span className="align-self-end">4.</span>
              <h3 className="align-self-center ms-5">Apoyo constante</h3>
              <p className="align-self-center text-end"> Estamos comprometidos a brindarte apoyo continuo antes y después de la adopción para garantizar una transición suave.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
