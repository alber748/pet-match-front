import { CatalogoCompleto } from "./components/CatalogoCompleto"
import { FilterPerritos } from "./components/FilterPerritos"
import { BannerPages } from "./../../components/BannerPages"

import Perro from "../../../assets/perro-adopta.png"

export const Adopta = () => {
  return (
    <>
    <BannerPages perritoImg={ Perro }
      title="¡Encuentra tu compañero perfecto en PetMatch!"
      text="Tú próximo amigo peludo está a solo un clic de distancia. En petMatch, simplificamos la adopción de mascotas. Encuentra a tu compañero perfecto de manera rápida y fácil."
      />
      <FilterPerritos />
      <div className="mt-5">
        <CatalogoCompleto />
      </div>
    </>
  )
}
