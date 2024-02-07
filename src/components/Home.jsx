import React from 'react';
import { NavLink } from 'react-router-dom';

import "../style/Home.css"
import "../style/Global.css"

function Home() {
  return <>
    <div className="mb-4">
      <div className="container-fluid hero">
        <NavLink 
          to="/react-portfolio/contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          <button className="btn btn-primary btn-lg" type="button" id="herogit">View Services</button>
        </NavLink>
        
      </div>
    </div>
      
    <div className="container-fluid allContent">  
      <div className="row align-items-center" id="about">
        <div className="container-fluid col-lg-12 col-md-12 col-sm-12">
          <h1>Realize your vision</h1>
          <h4>Bringing Your Ideas to Life</h4>
        </div>
      </div>
    </div>
  </>
}

export default Home;
