import React from 'react';
import Project from './Project';
import projects from '../projects.json'
import "../style/ProjectGallery.css"
import "../style/Global.css"

function ProjectGallery() {
  return (
    <div className="container-fluid allContent">
      <div className="row align-items-center" >
        <div className="container-fluid col-lg-2 col-md-12 col-sm-12 secTitleContain"><h2>Portfolio Gallery</h2></div>
        <div className="container-fluid col-lg-10 col-md-12 col-sm-12 section-block">
          <div className="container">
            <div className="row">
              <div className="card col-lg-12 col-md-12 col-sm-12">
                <h5 className="card-title">Description:</h5>
                <p className="card-text">xxxxxx</p>
              </div>
              <Project 
                title = {projects[0].title}
                deployed = {projects[0].deployed}
                repo = {projects[0].repo}
                image = {projects[0].image}
              />
              <Project 
                title = {projects[1].title}
                deployed = {projects[1].deployed}
                repo = {projects[1].repo}
                image = {projects[1].image}
              />
              <Project 
                title = {projects[2].title}
                deployed = {projects[2].deployed}
                repo = {projects[2].repo}
                image = {projects[2].image}
              />
              <Project 
                title = {projects[3].title}
                deployed = {projects[3].deployed}
                repo = {projects[3].repo}
                image = {projects[3].image}
              />
              <Project 
                title = {projects[4].title}
                deployed = {projects[4].deployed}
                repo = {projects[4].repo}
                image = {projects[4].image}
              />
              <Project 
                title = {projects[5].title}
                deployed = {projects[5].deployed}
                repo = {projects[5].repo}
                image = {projects[5].image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectGallery;
