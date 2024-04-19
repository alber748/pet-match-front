
import { Link } from "react-router-dom";

interface BannerPagesProps {
  perritoImg: string;
  separador?: string;
  title : string;
  text : string;
}

export const BannerPages = ({ perritoImg, separador, title, text }: BannerPagesProps) => {
  return (
    <>
      <div className="banner-container z-0">
        <div className="d-flex flex-md-row flex-column-reverse row banner-home m-auto w-md-75 w-100 flex-wrap-reverse">
          <div className="col-md-6 col p-md-5 px-3 pb-5 d-flex justify-content-center align-items-center flex-column text-md-start text-center">
            <div className="w-100">
              <p className="text-warning mb-0 mx-3"><b>PetMatch</b></p>
            <h1> { title } </h1>
            <p> {text} </p>
             <button className="btn btn-warning btn-link-a"><Link to={ "/adopta" }>Ver los perritos</Link></button>
            </div>
          </div>
          <div className="col-md-6 col p-md-5 px-5 d-flex justify-content-md-end justify-content-center max-w-500">
            <img className="w-100 h-auto object-fit-cover" src={ perritoImg } alt="Perro" />
          </div>
        </div>
      </div>
      {
        separador ? (<div className="separador">
        <img src={ separador } alt="" className="img-separate" />
      </div>) : (null)
      }
    </>
  );
};
