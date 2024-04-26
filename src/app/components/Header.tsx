
import { NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

//Assets
import logo from "../../assets/logo.png"

export const Header = () => {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  const handleSesion = () => {
    localStorage.clear()
    navigate("/")
  }
  return (
    <header className=''>
      <div className='container-header desktop-header d-md-flex d-hidden'>
        <div className='col-6 d-flex justify-content-start '>
          <img src={logo} alt="" className='logo' />
          <NavLink to='/' className='link-head'> PetMatch </NavLink>
        </div>
        <div className='col-6 d-flex justify-content-between nav-header'>
          <NavLink to='/' className='link-head'> Inicio </NavLink>
          <NavLink to='/adopta' className='link-head'> Adopta </NavLink>
          <NavLink to='/acerca-de' className='link-head'> Acerca de </NavLink>
          {!token ? <NavLink to='/login' className='link-head'> Ingresar </NavLink> :
            <>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Perfil
                </button>
                <ul className="dropdown-menu">
                  <li><NavLink to='/perfil' className='link-head'> Perfil </NavLink></li>
                  <li><button className='btn btn-warning ' onClick={handleSesion}>Cerrar sesión</button></li>
                </ul>
              </div>
            </>}
        </div>
      </div>
      <div className='container-header mobile-header md-hidden'>
        <div className='col-6 d-flex justify-content-between'>
          <NavLink to='/' className='link-head'> PetMatch </NavLink>
          <a className='cursor-pointer'> <FontAwesomeIcon icon={faBars} /> </a>
        </div>

      </div>

    </header>
  )
}
