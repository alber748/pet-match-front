
interface SectionProps {
    title: string;
    description: string;
}

export const AcercaDeTerceraSection: React.FC<SectionProps> = ({ title, description }) => {
    return (
        <div className="container-xxl py-5">
            <h1>{title}</h1>
            <p>{description}</p>
            <form action="" className="d-flex flex-column justify-content-center align-items-center form-acerca w-25 mx-auto my-5 gap-3">
                <h2 className="mb-2">Formulario de Contacto</h2>
                <input type="text" className="w-50 ps-2" placeholder="Ingrese su nombre" />
                <input type="email" className="w-50 ps-2" placeholder="Example@gmail.com" />
                <textarea name="" id="" cols={30} rows={10} className="w-50 ps-2" placeholder="Ingrese su consulta/sugerencia"></textarea>
                <button type="submit" className=" btn-adoptar"> Consultar</button>
            </form>
        </div>
    )
}