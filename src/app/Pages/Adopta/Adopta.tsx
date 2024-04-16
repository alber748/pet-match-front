import { CatalogoCompleto } from "./components/CatalogoCompleto"
import { FilterPerritos } from "./components/FilterPerritos"
export const Adopta = () => {
  return (
    <>
      <FilterPerritos />
      <div className="mt-5">
        <CatalogoCompleto />
      </div>
    </>
  )
}
