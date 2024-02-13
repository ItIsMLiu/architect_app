import React, {useEffect, useRef} from 'react';
import { useLocation } from 'react-router-dom';
import "../style/ArchServices.css"

function InteriorServices() {
    const interiorRef = useRef(null);
    const location = useLocation();

    useEffect(()=>{
        if (interiorRef.current) {
            interiorRef.current.scrollIntoView({behavior:"smooth"});
        }
    }, [location]);

    return (
        <div ref={interiorRef} className="architecture container-fluid col-lg-12 col-md-12 col-sm-12 p-3">
            <div className="row">
                <div className='text-center'>
                    <h2>Interior Design Services</h2>
                    <p>Visualize Before You Materialize</p>
                </div>
                <div className="card col-lg-12 col-md-12 col-sm-12 img-link p-3">
                    <img-comparison-slider className="mx-auto d-block">
                        <img slot="first" src="/before1.jpg" className="card-img interiorSlider mx-auto d-block"/>
                        <img slot="second" src="/after1.jpg" className="card-img interiorSlider mx-auto d-block"/>
                    </img-comparison-slider>
                </div>
                <div className="card col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center p-3">
                    <ul><strong>Option 1 - Measure & Design</strong>
                        <li>Conducting comprehensive measurements and surveys of the room(s) to assess dimensions, layout, and existing features.</li>
                        <li>Engaging in thorough discussions with the client to understand their desired aesthetic preferences, functional requirements, and any specific design elements they envision.</li>
                        <li>Developing conceptual designs and creating mood boards or material samples to visually communicate design ideas, color schemes, textures, and finishes.</li>
                        <li>Utilizing advanced software tools to render realistic 3D visualizations of the proposed designs, allowing clients to visualize the space and make informed decisions.</li>
                    </ul>
                </div>
                <div className="card col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center p-3">
                    <ul><strong>Option 2 - Remote Design Only</strong>
                        <li>Client to provide measurements, plans and photos of the room(s)</li>
                        <li>Engaging in thorough discussions with the client to understand their desired aesthetic preferences, functional requirements, and any specific design elements they envision.</li>
                        <li>Developing conceptual designs and creating mood boards or material samples to visually communicate design ideas, color schemes, textures, and finishes.</li>
                        <li>Utilizing advanced software tools to render realistic 3D visualizations of the proposed designs, allowing clients to visualize the space and make informed decisions.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default InteriorServices;