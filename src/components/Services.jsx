import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ServiceOption from './ServiceOption';
import services from '../services.json'
import "../style/Services.css"
import "../style/Global.css"
import ArchServices from './ArchServices';
import InteriorServices from './InteriorServices';

function Services() {
  return <>
    <div className="container-fluid servicesContent">
        <div className="row" >
            <div className="container-fluid col-lg-12 col-md-12 col-sm-12 p-3 text-center">
                <h1>Services</h1>
                <p>Explore our architectural and interior services. Click on each option to learn more.</p>
            </div>
            <div className="container-fluid col-lg-12 col-md-12 col-sm-12 p-3">
                <div className="row p-3">
                    <ServiceOption 
                        title = {services[0].title}
                        image = {services[0].image}
                        page = {services[0].page}
                    />
                    <ServiceOption 
                        title = {services[1].title}
                        image = {services[1].image}
                        page = {services[1].page}
                    />
                </div>
            </div>
            <div className="container-fluid col-lg-12 col-md-12 col-sm-12 p-3">
                <div className="row">
                    <div className="container-fluid col-lg-12 col-md-12 col-sm-12">
                        <Routes>
                            <Route path="archservices" element={<ArchServices />} />
                            <Route path="interiorservices" element={<InteriorServices />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
}

export default Services;