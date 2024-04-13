
import { Link } from "react-router-dom";

interface BannerPagesProps {
  perritoImg: string;
  separador: string;
  title : string;
  text : string;
}

export const BannerPages = ({ perritoImg, separador, title, text }: BannerPagesProps) => {
  return (
    <>
      <div className="banner-container z-0">
        <div className="d-flex banner-home m-auto">
          <div className="col-6 d-flex justify-content-center align-items-center flex-column p-5 text-start">
            <div className="w-100">
              <p className="text-warning mb-0 mx-3"><b>PetMatch</b></p>
            <h1> { title } </h1>
            <p> {text} </p>
             <button className="btn btn-warning btn-link-a"><Link to={ "/adopta" }>Ver los perritos</Link></button>
            </div>
          </div>
          <div className="col-6 p-5">
            <img className="w-75" src={ perritoImg } alt="Perro" />
          </div>
        </div>
      </div>
      <div className="separador">
        <img src={ separador } alt="" className="img-separate" />
      </div>
    </>
  );
};
