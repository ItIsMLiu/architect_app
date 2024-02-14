import ImageCollage from "./ImageCollage";
import { NavLink } from "react-bootstrap";

function Home() {
  return <>
    <div className="mb-4">
      <div className="container-fluid hero">
        <ImageCollage />
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
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          <button className="btn btn-primary btn-lg" type="button">View Services</button>
        </NavLink>
        </div>
      </div>
    </div>
  </>
}

export default Home;
