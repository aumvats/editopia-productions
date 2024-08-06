import React from 'react';
import './ProjectsSection.css';

const projects = [
  {
    year: '2023',
    name: 'Olliviere',
    description: 'How we furthered AI in tech.',
    image: '/path/to/olliviere-image.jpg',
  },
  // Add more projects here
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2>Our projects</h2>
        <p>
          We offer services to help early-stage startups find their brand voice and
          showcase a product worth buying. Everything is focused on a successful
          launch.
        </p>
      </div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-info">
              <span className="project-year">{project.year}</span>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <button className="view-case-btn">View case</button>
            </div>
            <div className="project-image">
              <img src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={project.name} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;