import { BrowserRouter, Routes, Route } from 'react-router-dom'
//Paginas
import { Home } from './Pages/Home/Home'
import { Adopta } from './Pages/Adopta/Adopta'
import { AcercaDe } from './Pages/Acerca-de/AcercaDe'
import { Perfil } from './Pages/Perfil/Perfil'
import { Login } from './Pages/login/Login'
import { EditPerfil } from './components/EditPerfil'

//Componentes
import { Header } from './components/Header';
import { Footer } from './components/Footer'


const App = () => {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adopta" element={<Adopta />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/edit_perfil" element={<EditPerfil />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App;