import React from 'react';

//Assets
import perro1 from "../../../../assets/AcercaDe/pexels-amal-santhosh-662417.jpg"
import perro2 from "../../../../assets/AcercaDe/pexels-andreas-schnabl-13240748.jpg"
import perro3 from "../../../../assets/AcercaDe/pexels-charles-1851164.jpg"
import perro4 from "../../../../assets/AcercaDe/pexels-christian-domingues-731022.jpg"
import perro5 from "../../../../assets/AcercaDe/pexels-helena-lopes-3888470.jpg"
import perro6 from "../../../../assets/AcercaDe/pexels-ylanite-koppens-612813.jpg"
import perro7 from "../../../../assets/AcercaDe/pexels-mindaugas-1294062.jpg"



interface SectionProps {
    title: string;
    description: string;
}

export const AcercaDePrimeraSection: React.FC<SectionProps> = ({ title, description }) => {
    return (
        <div className="container-xxl  custom-height-1400 bg-line overflow-hidden">
            <div className="w-100 mt-5 position-relative ">
                <div className='circle position-absolute z-1'>
                </div>
                <div className='acercaDe-content ms-4 '>
                    <h1 >En <span>PetMatch</span> {title}</h1>
                    <p className='mt-4'>En <span>PetMatch</span>{description}</p>
                </div>
                <div className=' container-xxl position-absolute p-0 custom-height-1400 top '>
                    <div className="cont-img-item">
                        <img src={perro1} className="img-item" alt={title} />
                    </div>
                    <div className="cont-img-item">
                        <img src={perro2} className="img-item" alt={title} />

                    </div>
                    <div className="cont-img-item">
                        <img src={perro3} className="img-item" alt={title} />

                    </div>
                    <div className="cont-img-item">
                        <img src={perro4} className="img-item" alt={title} />

                    </div>
                    <div className="cont-img-item">
                        <img src={perro5} className="img-item" alt={title} />

                    </div>
                    <div className="cont-img-item">
                        <img src={perro6} className="img-item" alt={title} />

                    </div>
                    <div className="cont-img-item">
                        <img src={perro7} className="img-item" alt={title} />

                    </div>

                </div>




            </div>
        </div>
    );
}

