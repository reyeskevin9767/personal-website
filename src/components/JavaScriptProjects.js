import React from 'react';

const JavaScriptProjects = ({ projects }) => {
  const renderedList = projects.map((project) => {
    return (
      <div className="ui link cards" key={project.imgLink}>
        <div className="card">
          <div className="image">
            <img src={project.imgLink} alt="website" />
          </div>
          <div className="content">
            <div className="header">{project.title}</div>
            <div className="meta">
              <a href={project.url}>Friends</a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div>{renderedList}</div>;
};

export default JavaScriptProjects;
