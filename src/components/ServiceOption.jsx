import React from 'react';
import "../style/Global.css"
import "../style/ServiceOption.css"
import { Link } from 'react-router-dom';

function ServiceOption(props) {
  return <>
    <Link to={props.page} className="card col-lg-6 col-md-6 col-sm-12 img-link" id="serviceOption" onClick={props.handleClick}>
      <img src={props.image} className="card-img" alt={`${ props.title }`}></img>
      <div className="card-img-overlay">
        <div className="subheading">
          <h5 className="card-title"><strong>{ props.title }</strong></h5>
        </div>
      </div>
    </Link>
  </>
}

export default ServiceOption;
