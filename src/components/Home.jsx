import React from 'react';
import { NavLink } from 'react-router-dom';
import ImageCollage from './ImageCollage';

import "../style/Home.css"
import "../style/Global.css"

const Home = () => (
  <>
    <div className="mb-4">
      <div className="container-fluid hero">

      </div>
    </div>

    <div className="container-fluid allContent">
      <div className="row">
        <div className="container-fluid col-lg-12 col-md-12 col-sm-12 text-center" id="view-services">
          <h3>Partner with Us to Realize Your Vision</h3>
          <NavLink
            to="/architecture-app/services"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active px-0 pt-0' : 'nav-link px-0 pt-0'
            }
          >
            <ImageCollage />
            <button className="btn btn-primary btn-lg" type="button" id="herogit">View Services</button>
          </NavLink>

        </div>
      </div>
    </div>
  </>
);

export default Home;
