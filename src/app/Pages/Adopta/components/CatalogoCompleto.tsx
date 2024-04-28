

import { CardPerro } from "../../../components/CardPerro"

export const CatalogoCompleto = ({ perros }) => {

  return (
    <>
      <div className="container-catalogo mx-auto mt-3 mb-5 ">
        <div className={`row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  mb-5 w-100`}>
          {perros.map((perro, index) => (
            <CardPerro key={index} perro={perro} />
          ))}
        </div>
      </div>
    </>
  )
}
