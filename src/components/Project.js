// src/components/Project.js
import React from 'react';

const Project = ({ title, description, link }) => (
  <div className="project">
    <h2>{title}</h2>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
  </div>
);

export default Project;
