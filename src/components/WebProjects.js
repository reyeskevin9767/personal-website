import React from 'react';

const WebProjects = ({ projects }) => {
  const renderedList = projects.map((project) => {
    return (
      <div className="card">
        <div className="image">
          <img src={project.imgLink} alt="project" />
        </div>
        <div className="content">
          <div className="header">
            <a href={project.url}> {project.title}</a>
          </div>
          <div className="meta">
            <a href={project.url}>Visit Project</a>
            <a href={project.view}>View Code</a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui four stackable cards">{renderedList} </div>
    </div>
  );
};

export default WebProjects;
