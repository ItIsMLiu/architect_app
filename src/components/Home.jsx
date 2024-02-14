import ImageCollage from "./ImageCollage";
import { NavLink } from "react-router-dom";

function Home() {
  return <>
    <div className="container-fluid allContent">
      <div className="row">
        <div className="container-fluid col-lg-12 col-md-12 col-sm-12 text-center" id="view-services">
          <h3>Partner with Us to Realize Your Vision</h3>
          <p>Architectural and interior design services for homeowners and commercial clients within the UK.</p>
          <NavLink
            to="/architecture-app/services"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <button className="btn btn-primary btn-lg m-3" type="button">View Services</button>
          </NavLink>
        </div>
      </div>
    </div>

    <div className="mb-0" style={{
      marginBottom: 0
    }}>
      <div className="container-fluid hero" style={{
        paddingLeft: 0,
        paddingRight: 0
      }}>
        <ImageCollage />
      </div>
    </div>
  </>
}

export default Home;
