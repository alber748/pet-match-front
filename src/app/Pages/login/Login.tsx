import { useState } from "react"

// Assets
import perroImg from "../../../assets/perro-login.png";
import perrosImg from "../../../assets/perritos-login.png"


export const Login = () => {
  const [isLogin, setIsLogin] = useState(true)

  const handleLogin = (): void => {
    setIsLogin(prevIsLogin => !prevIsLogin);
  };
  return (
    <div className="container-login d-flex justify-content-center align-items-center  bg-huellas z-index-0 my-5">
      {isLogin ?
        <form action="" className="d-flex flex-column w-25 align-items-center form-login gap-4 ps-2 position-relative">
          <h2 className="mt-5 mx-auto">PetMatch : ¡Inicio de Sesión!</h2>
          <input type="email" placeholder="Example@gmail.com" className="mt-5 w-50 ps-2 element-form-login" />
          <input type="password" placeholder="Contraseña" className="w-50 ps-2 element-form-login" />
          <div className="d-flex gap-3 mt-3">
            <button type="submit" >Ingresar</button>
            <button onClick={handleLogin}>Registrarse</button>
          </div>
          <img src={perrosImg} alt="" className="mt-5 img-fluid imagen-bottom" style={{ marginBottom: "-4%" }} />
        </form>
        :
        <form action="" className="d-flex flex-column w-25 justify-content-center align-items-center form-login gap-4 position-relative py-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-90deg-left arrow-back " viewBox="0 0 16 16" onClick={handleLogin}>
            <path fillRule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z" />
          </svg>
          <h2>PetMatch : Registarse</h2>
          <select name="select1" className="w-50 ps-2 element-form-login" value="">
            <option value="" disabled>Selecciona el tipo de entidad</option>
            <option value="value1">Persona</option>
            <option value="value3">Organización</option>
          </select>
          <input type="text" placeholder="Ingrese su Nombre" className="w-50 ps-2 element-form-login" />
          <input type="text" placeholder="Ingrese su Apellido" className="w-50 ps-2 element-form-login" />
          <input type="tel" inputMode="tel" pattern="[0-9]*" maxLength={10} placeholder="Teléfono" className="w-50 ps-2 element-form-login" />
          <input type="email" placeholder="Example@gmail.com" className="w-50 ps-2 element-form-login" />
          <input type="text" placeholder="Ej: Argentina, Córdoba" className="w-50 ps-2 element-form-login" />
          <select name="select2" className="w-50 ps-2 element-form-login">
            <option value="v1" disabled selected >Tipo de participación</option>
            <option value="guarderia">Guardería</option>
            <option value="receptor">Receptor</option>
            <option value="cuidador">Cuidador</option>
            <option value="dador">Dador</option>
          </select>
          <button type="submit">Registrarse</button>
        </form>
      }
      <img src={perroImg} alt="asda" className="imagen-rigth d-none d-sm-block" />
    </div>
  )
}
