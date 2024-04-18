
import { NavLink } from 'react-router-dom'

//Assets
import  logo  from "../../assets/logo.png"

export const Header = () => {
  return (
    <header>
      <div className='container-header'>
        <div className='col-6 d-flex justify-content-start '>
          <img src={logo} alt=""  className='logo'/>
          <NavLink to='/' className='link-head'> PetMatch </NavLink>
        </div>
        <div className='col-6 d-flex justify-content-between nav-header'>
          <NavLink to='/adopta' className='link-head'> Adopta </NavLink>
          <NavLink to='/acerca-de' className='link-head'> Acerca de </NavLink>
          <NavLink to='/perfil' className='link-head'> Perfil </NavLink>
          <NavLink to='/login' className='link-head'> Ingresar </NavLink>
        </div>
      </div>

    </header>
  )
}
