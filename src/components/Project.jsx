import React from 'react';
import "../style/Global.css"
import "../style/Project.css"

function Project(props) {
  return <>
    <div className="card col-lg-6 col-md-6 col-sm-12 img-link" id="project">
      <img src={props.image} className="card-img" alt={`${ props.title } project image`}></img>
      <div className="card-img-overlay">
        <div className="subheading">
          <h5 className="card-title"><strong>Project Title:</strong> { props.title }</h5>
        </div>
      </div>
    </div>
  </>
}

export default Project;
