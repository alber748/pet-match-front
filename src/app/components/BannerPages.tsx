
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


interface BannerPagesProps {
  perritoImg: string;
  separador?: string;
  title: string;
  text: string;
}

export const BannerPages = ({ perritoImg, title, text }: BannerPagesProps) => {
  const [width, setWidth] = useState<number>(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div className="banner-container z-0">
        <div className="d-flex flex-md-row flex-column-reverse row banner-home m-auto w-md-75 w-100 flex-wrap-reverse position-relative ">
          <div className="col-md-6 col p-md-5 px-3 pb-5 d-flex  flex-column text-md-start text-center mt-5 info-banner">
            <div className="w-100 mt-5 banner-info">
              <p className="text-warning mb-0 mx-3"><b>PetMatch</b></p>
              <h1 className="mb-3"> {title} </h1>
              <p> {text} </p>
              <button className="btn btn-warning btn-link-a"><Link to={"/adopta"}>Ver los perritos</Link></button>
            </div>
          </div>
          {width > 1065 ? <div className="col-md-6  p-md-5 px-5 d-flex justify-content-md-end justify-content-center max-w-500">
            <img className="w-75 h-auto img-fluid img-banner" src={perritoImg} alt="Perro" />
          </div> : ""}
        </div>
      </div>

    </>
  );
};
