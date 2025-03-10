import React from 'react';
import './project.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project name',
      description: 'desc',
      link: '#'
    },
  ];

  return (
    <section className="projects">
      <h2>My Project</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="btn">desc</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;