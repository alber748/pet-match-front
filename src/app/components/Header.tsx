
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <header className=''>
      <div className='container-header desktop-header d-md-flex d-hidden'>
        <div className='col-6 d-flex justify-content-start '>
        <NavLink to='/' className='link-head'> PetMatch </NavLink>
        </div>
        <div className='col-6 d-flex justify-content-between nav-header'>
          <NavLink to='/adopta' className='link-head'> Adopta </NavLink>
          <NavLink to='/acerca-de' className='link-head'> Acerca de </NavLink>
          <NavLink to='/perfil' className='link-head'> Perfil </NavLink>
          <NavLink to='/login' className='link-head'> Ingresar </NavLink>
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
