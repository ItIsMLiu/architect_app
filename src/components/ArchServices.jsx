import React, {useEffect, useRef} from 'react';
import { useLocation } from 'react-router-dom';
import "../style/ArchServices.css"

function ArchServices() {
    const architectureRef = useRef(null);
    const location = useLocation();

    useEffect(()=>{
        if (architectureRef.current) {
            architectureRef.current.scrollIntoView({behavior:"smooth"});
        }
    }, [location]);

    return (
        <div ref={architectureRef} className="architecture container-fluid col-lg-12 col-md-12 col-sm-12 p-3">
            <div className="row">
                <div className='text-center'>
                    <h2>Architectural Services</h2>
                    <p>Feasibility to Building Regs (RIBA Stage 0-4)</p>
                </div>
                <div className="card col-lg-12 col-md-12 col-sm-12 img-link p-3">
                    <img src="/arch-services.jpg" className="card-img night-view mx-auto d-block" alt="Architectural Services" />
                </div>
                <div className="card col-lg-12 col-md-12 col-sm-12 d-flex align-items-center justify-content-center p-3">
                    <ul>What we can assist you with:
                        <li>Conducting property measurements and surveys.</li>
                        <li>Creating feasibility studies and identifying potential limitations.</li>
                        <li>Developing conceptual and technical designs, including 2D and 3D design iterations.</li>
                        <li>Providing guidance through planning and building regulations procedures.</li>
                        <li>Compiling and submitting drawings to the Local Authority for Planning Permission.</li>
                        <li>Overseeing the progress of planning applications.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ArchServices;