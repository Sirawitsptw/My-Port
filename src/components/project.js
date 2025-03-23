import React from 'react';
import './project.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Mobile Application For Bying Funiture with AR",
            description: "A personal portfolio website built with React to showcase my projects and skills.",
            technologies: ["Dart", "Flutter", "JavaScript", "React", "CSS", "Firebase"],
            image: "/images/portfolio.jpg",
            github: "https://github.com/yourusername/portfolio",
        },
        {
            id: 2,
            title: "Shoe E-Commerce Website",
            description: "A full-stack e-commerce application with product listing, cart functionality, and payment integration.",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            image: "/images/ecommerce.jpg",
            github: "https://github.com/yourusername/ecommerce",
        },
        {
            id: 3,
            title: "Webboard",
            description: "A weather application that provides real-time weather information based on location.",
            technologies: ["JavaScript", "HTML/CSS", "Weather API"],
            image: "/images/weather.jpg",
            github: "https://github.com/yourusername/weather-app",
        }
    ];

    return (
        <div className='project' id='project'>
            <div className='container'>
                <h2>My Projects</h2>
                <div className='projects-grid'>
                    {projects.map((project) => (
                        <div className='project-card' key={project.id}>
                            <div className='project-image'>
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className='project-info'>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className='project-tech'>
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className='tech-tag'>{tech}</span>
                                    ))}
                                </div>
                                <div className='project-links'>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className='project-btn'>Source</a>                               
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;