import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

import { UserEditInfo, UserEditPassword } from "../../data/users"
import logo from "../../assets/logo-user.png"
import axios from "axios"

export const EditPerfil = () => {
    const [opcionesEdit, setOpcionesEdit] = useState<string>('personal');
    
    const [formDataEditPassword, setFormDataEditPassword] = useState<UserEditPassword>({
        email: '',
        newPassword: '',
        oldPassword: ''
    });
    const [infoUser, setInfoUser] = useState<UserEditInfo>({
        email: "",
        name: "",
        lastname: "",
        phone: "",
        location: "",
        kindRol: "",
        entidad: "",
    });
    const navigate = useNavigate();

    // Nueva variable de estado para manejar los cambios en los inputs
    const [editedInfo, setEditedInfo] = useState<UserEditInfo>({
        email: "",
        name: "",
        lastname: "",
        phone: "",
        location: "",
        kindRol: "",
        entidad: "",
    });

    const handleOpciones = (event: React.MouseEvent<HTMLLIElement>): void => {
        const option = event.currentTarget.dataset.option;
        if (option) {
            setOpcionesEdit(option);
        }
    };

    const handleChangeEditInfo = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setEditedInfo({
            ...editedInfo,
            [e.target.name]: e.target.value,
        });
    };

    const handleChangeEditPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormDataEditPassword({
            ...formDataEditPassword,
            [e.target.name]: e.target.value,
        });
    };

    const updateInfo: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const newInfoUser = editedInfo; // Utilizamos los datos editados en lugar de los datos del usuario
        try {
            const response = await axios.put('https://pet-match-backend.onrender.com/api/user/edit', newInfoUser);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            console.log('Usuario logueado:', response.data.user);
            if (response.data.token) {
                navigate('/');
                localStorage.setItem('token', JSON.stringify(response.data.token));
            } else {
                const errorMesaage = document.getElementById('error-login');
                errorMesaage?.classList.remove('d-none');
                errorMesaage?.classList.add('d-block');
            }
        } catch (error) {
            console.error('Error al crear usuario:', error);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = localStorage.getItem('user');
            console.log('Usuario:', user);
            if (user) {
                setInfoUser(JSON.parse(user));
                setEditedInfo(JSON.parse(user)); // Inicializamos editedInfo con los datos del usuario
            }
        }
    }, []);

    const updatePassword: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const newPassword = formDataEditPassword;
        try {
            const response = await axios.post(' https://pet-match-backend.onrender.com/api/user/cambiar-pasword', newPassword);
            console.log('Contraseña actualizada', response.data);
            if (response.data.token) {
                navigate('/');
                localStorage.setItem('token', JSON.stringify(response.data.token));
            } else {
                const errorMesaage = document.getElementById('error-login');
                errorMesaage?.classList.remove('d-none');
                errorMesaage?.classList.add('d-block');
            }
        } catch (error) {
            console.error('Error al cambiar contraseña:', error);
        }
    };

    return (
        <div className="container-xxl  container-section-edit">
            <div className="row mt-5 p-3 container-editar-perfil">
                <div className="col-3 options-editar">
                    <ul className="d-flex flex-column gap-3 cursor-pointer">
                        <li className="p-3 " onClick={handleOpciones} data-option="personal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill me-3" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg>
                            Informacion Personal
                        </li>
                        <li className="p-3" onClick={handleOpciones} data-option="contraseña">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="16" height="16" className="me-3"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H392.6c-5.4-9.4-8.6-20.3-8.6-32V352c0-2.1 .1-4.2 .3-6.3c-31-26-71-41.7-114.6-41.7H178.3zM528 240c17.7 0 32 14.3 32 32v48H496V272c0-17.7 14.3-32 32-32zm-80 32v48c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32V272c0-44.2-35.8-80-80-80s-80 35.8-80 80z" /></svg>
                            Contraseña</li>
                        <li className="p-3" onClick={handleOpciones} data-option="cuenta">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="16" height="16" className="me-3"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM471 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>
                            Cuenta
                        </li>
                    </ul>
                </div>
                {opcionesEdit === "personal" ?
                    <div className="col-9">
                        <h3 className="ms-2">Generales</h3>
                        <form onSubmit={updateInfo} className=" mt-4 ps-5 form-edit-perfil">
                            <div className="mt-4 cont-img position-relative">
                                <div className="position-relative rounded-circle overflow-hidden">
                                    <img src={logo} alt="" className="rounded-circle z-1 img-hover " />
                                    <div className="position-absolute hover-img z-2" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-pencil mt-3" viewBox="0 0 16 16">
                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-6 d-flex flex-column gap-3">
                                    <div>
                                        <h5 className="mb-2">Nombre</h5>
                                        <input
                                            type="text"
                                            value={editedInfo.name}
                                            name="name"
                                            className="w-75"
                                            onChange={handleChangeEditInfo}
                                        />
                                    </div>
                                    <div>
                                        <h5 className="mb-2">Apellido</h5>
                                        <input
                                            type="text"
                                            value={editedInfo.lastname}
                                            name="lastname"
                                            className="w-75"
                                            onChange={handleChangeEditInfo}

                                        />
                                    </div>
                                    <div>
                                        <h5 className="mb-2">Tipo de entidad</h5>
                                        <select name="entidad" className="w-75" onChange={handleChangeEditInfo}>
                                            <option value="1">Persona</option>
                                            <option value="2">Organización</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-6 d-flex flex-column gap-3">
                                    <div>
                                        <h5 className="mb-2">Telefono</h5>
                                        <input
                                            type="tel"
                                            inputMode="tel"
                                            pattern="[0-9]*"
                                            maxLength={10}
                                            value={editedInfo.phone}
                                            name="phone"
                                            className="w-75"
                                            onChange={handleChangeEditInfo}
                                        />
                                    </div>
                                    <div>
                                        <h5 className="mb-2">Ubicación</h5>
                                        <input
                                            type="text"
                                            value={editedInfo.location}
                                            name="location"
                                            className="w-75"
                                            onChange={handleChangeEditInfo}
                                        />
                                    </div>
                                    <div>
                                        <h5 className="mb-2"> Tipo de participación</h5>
                                        <select name="kindRol" className="w-75" onChange={handleChangeEditInfo}>
                                            <option value="1">Guardería</option>
                                            <option value="2">Receptor</option>
                                            <option value="3">Cuidador</option>
                                            <option value="4">Dador</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="my-3">
                                <h5 className="mb-2">Email</h5>
                                <input
                                    type="email"
                                    value={editedInfo.email}
                                    name="email"
                                    className="w-75"
                                    onChange={handleChangeEditInfo}
                                />
                            </div>
                            <button type="submit" >Guardar</button>
                        </form>
                    </div>
                    : opcionesEdit === "contraseña" ?
                        <div className="col-9">
                            <h3 className="ms-2">Cambiar Contraseña</h3>
                            <form onSubmit={updatePassword} className=" mt-4 ps-5 form-edit-perfil">
                                <div className="row">
                                    <div className="col-6">
                                        <h5 className="mb-2">Contraseña actual</h5>
                                        <input
                                            type="text"
                                            placeholder=""
                                            name="name"
                                            className="w-75 mb-3"
                                            onChange={handleChangeEditPassword}
                                        />
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-6">
                                        <h5 className="mb-2">Nueva contraseña</h5>
                                        <input
                                            type="password"
                                            placeholder=""
                                            name="name"
                                            className="w-75"
                                            onChange={handleChangeEditPassword}

                                        />
                                    </div>
                                    <div className="col-6">
                                        <h5 className="mb-2">Re-escribir nueva contraseña</h5>
                                        <input
                                            type="password"
                                            placeholder=""
                                            name="name"
                                            className="w-75"
                                            onChange={handleChangeEditPassword}

                                        />
                                    </div>
                                </div>
                                <button type="submit" className="mt-4">Restablecer contraseña</button>
                            </form>
                        </div>
                        :
                        <div className="col-9">
                            <h3 className="ms-2">Cuenta</h3>
                            <form action="" className=" mt-4 ps-5 form-edit-perfil">
                                <div className="cuenta-top-section p-2">
                                    <span >¿Estás seguro que deseas cerrar tu cuenta?</span>
                                    <p className=" mt-2 mb-0">Si cierras tu cuenta en PetMatch se eliminarán tus publicaciones y también tus postulaciones .</p>
                                </div>
                                <div className="cuenta-center-section p-2 mt-3">
                                    <p>Te pedimos por favor que completes el siguiente formulario con tus comentarios. Nos ayudará a mejorar PetMatch en el futuro.</p>
                                    <select name="" id="" className="w-100">
                                        <option value="" disabled>Elige un motivo</option>
                                        <option value="">No quiero tener mas una cuenta en esta pagina</option>
                                        <option value="">No encontre perro</option>
                                        <option value="">No pude adoptar un perro</option>
                                        <option value="">Otros motivos</option>
                                    </select>
                                </div>
                                <div className="cuenta-bottom-section p-2">
                                    <p>Comentarios: Amplía los motivos por los cuales decides cerrar tu cuenta y/o déjanos mejoras que crees que podamos realizar para mejorar PetMatch</p>
                                    <textarea name="" id="" rows={5} className="w-100"></textarea>
                                </div>
                                <button type="submit" className="mt-4">Eliminar cuenta</button>
                            </form>
                        </div>
                }
            </div>
        </div >
    )
}