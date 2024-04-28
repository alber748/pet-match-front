import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import users, { User } from '../../../data/users';
import axios from 'axios';
// Assets
import perroImg from "../../../assets/perro-login.png";
import perrosImg from "../../../assets/perritos-login.png";

interface UserLogin {
  email: string;
  password: string;
}

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const locationHook = useLocation()
  const [formData, setFormData] = useState<User>({
    email: '',
    password: '',
    name: '',
    lastname: '',
    phone: '',
    location: '',
    kindRol: '',
    entidad: '',
  });

  const [formDataLogin, setFormDataLogin] = useState<UserLogin>({
    email: '',
    password: '',
  });

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormDataLogin({
      ...formDataLogin,
      [e.target.name]: e.target.value,
    });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const login: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const user = formDataLogin;

    try {

      const response = await axios.post('https://pet-match-backend.onrender.com/api/auth/', user);

      console.log('Usuario logueado:', response.data);
      const { email, entidad, kindRol, lastname, name, location, phone } = response.data
      if (response.data.token) {
        localStorage.setItem('token', JSON.stringify(response.data.token));
        localStorage.setItem('idUser', JSON.stringify(response.data.uid));
        localStorage.setItem('user', JSON.stringify({ email, entidad, kindRol, lastname, name, location, phone }))
        if (locationHook.pathname === "/login") {
          navigate('/');
        } else {
          window.history.back()
        }
      } else {
        const errorMesaage = document.getElementById('error-login');
        errorMesaage?.classList.remove('d-none');
        errorMesaage?.classList.add('d-block');
      }

    } catch (error) {
      console.error('Usuario no encontrado', error);
    }
  };

  const createUser = async (user: User) => {
    try {

      const response = await axios.post('https://pet-match-backend.onrender.com/api/auth/new', user);

      console.log('Usuario creado:', response.data);
    } catch (error) {
      console.error('Error al crear usuario:', error);
    }
  }

  const register: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const newUser: User = formData;
    createUser(newUser);

    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));
  }

  const handleLogin = (): void => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };
  return (
    <div className="container-login d-flex justify-content-center align-items-center bg-huellas z-index-0">
      {isLogin ? (
        <form onSubmit={login}
          autoComplete="off"
          action=""
          className="d-flex flex-column w-25 align-items-start px-5 form-login gap-4 position-relative"
        >
          <h2 className="mt-5 mx-auto">Inicia Seción</h2>
          <input
            type="email"
            placeholder="Example@gmail.com"
            className="mt-5 w-100 ps-2 element-form-login"
            name="email"
            onChange={handleChangeLogin}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-100 ps-2 element-form-login"
            name="password"
            onChange={handleChangeLogin}
          />
          <p className="text-danger error-mesage position-absolute d-none" id="error-login"> El usuario o contraseña es incorrecto</p>
          <div className="d-flex gap-3 mt-3 justify-content-center align-items-baseline ">
            <button type="submit">Ingresa</button>
            <p>O <span className="cursor-pointer" onClick={handleLogin}>crea una cuenta</span></p>
          </div>
          <img
            src={perrosImg}
            alt=""
            className="mt-5 img-fluid imagen-bottom position-absolute bottom-0 z-index-0 w-75 "
            style={{ marginBottom: "-2.6%" }}
          />
        </form>
      ) : (
        <form
          onSubmit={register}
          autoComplete="off"
          className="d-flex flex-column w-25 justify-content-center align-items-start form-login gap-4 position-relative py-2 px-5"
        >
          <h2 className="text-center w-100">Registrate</h2>
          <select name="entidad" className="w-100 ps-2 element-form-login" onChange={handleChange}>
            <option value="" disabled>
              Selecciona el tipo de entidad
            </option>
            <option value="1">Persona</option>
            <option value="2">Organización</option>
          </select>
          <input
            type="text"
            placeholder="Ingrese su Nombre"
            className="w-100 ps-2 element-form-login"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Ingrese su Apellido"
            className="w-100 ps-2 element-form-login"
            name="lastname"
            onChange={handleChange}
          />
          <input
            type="tel"
            inputMode="tel"
            pattern="[0-9]*"
            maxLength={10}
            placeholder="Teléfono"
            className="w-100 ps-2 element-form-login"
            name="phone"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Ej: Argentina, Córdoba"
            className="w-100 ps-2 element-form-login"
            name="location"
            onChange={handleChange}
          />
          <select name="kindRol" className="w-100 ps-2 element-form-login" onChange={handleChange}>
            <option value="v1" disabled>
              Tipo de participación
            </option>
            <option value="1">Guardería</option>
            <option value="2">Receptor</option>
            <option value="3">Cuidador</option>
            <option value="4">Dador</option>
          </select>
          <input
            type="email"
            placeholder="Example@gmail.com"
            className="w-100 ps-2 element-form-login"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Crea una contraseña"
            className="w-100 ps-2 element-form-login"
            name="password"
            onChange={handleChange}
          />
          <div className="d-flex gap-3 mt-3 justify-content-center align-items-baseline">
            <button type="submit">Registrarse</button>
            <p>O <span className="cursor-pointer" onClick={handleLogin}>inicia sesion</span></p>
          </div>
        </form>
      )}
      <img src={perroImg} alt="asda" className="imagen-rigth d-none d-md-block" />
    </div>
  );
};
