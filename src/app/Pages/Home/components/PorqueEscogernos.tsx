import perrito from "../../../../assets/perrito-porque.png";


export const PorqueEscogernos = ( ) => {
  return (
      <>
      <div className="w-100 bg-huellas mg--20 z-0">
          <h2 className="text-center mt-5 ">Porque escogernos</h2>
          <p className="text-center">Te mostramos porque somos tu mejor opcion para buscar un amigo peludo</p>
        <div className="d-flex justify-content-center align-items-center banner-home m-auto" >
          <div className="flex col-4">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, eum.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, eum.</p>
          </div>
          <div className="flex col-4 p-5">
            <img src={ perrito } className="w-100" />
          </div>
          <div className="flex col-4">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, eum.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, eum.</p>
          </div>
        </div>

      </div>
    </>
  )
}
