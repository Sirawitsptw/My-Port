import React, { useEffect } from 'react';
import './project.css';
import project1 from '../images/project01.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';
import project4 from '../images/project4.png';
import logo from '../images/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: true
        });
    }, []);

    const projects = [
        {
            id: 1,
            title: "Mobile Application for Buying Furniture Using Augmented Reality",
            description: "Developed a mobile application that allows users to preview furniture in real-time using Augmented Reality (AR).",
            tech: ["Dart", "Flutter", "Firebase"],
            image: project1,
            github: "https://github.com/Sirawitsptw/project_furniture_app.git",
        },
        {
            id: 2,
            title: "Website for managing products",
            description: "A product management website that allows users to add, edit, delete, and view product details with ease. It supports product data storage in a database.",
            tech: ["JavaScript", "HTML/CSS", "React", "Firebase"],
            image: project2,
            github: "https://github.com/Sirawitsptw/project_furniture_web.git",
        },
        {
            id: 3,
            title: "Shoe Ecommerce Website",
            description: "Developed an e-commerce platform for shoe sales, featuring a product ordering system and user authentication.",
            tech: ["PHP", "CSS", "phpMyAdmin"],
            image: project3,
            github: "https://github.com/Sirawitsptw/webdatabase.git",
        },
        {
            id: 4,
            title: "Webboard",
            description: "Developed a web-based forum for user discussions with features for creating posts, commenting, and user authentication.",
            tech: ["PHP", "HTML", "phpMyAdmin"],
            image: project4,
            github: "https://github.com/Sirawitsptw/Webboard-ECT-Sirawit.git",
        }
    ];

    return (
        <div className='project'>
            <div className='container' id='project'>
                <h3 data-aos="fade-down">My Lastest Projects</h3>
                <div className='projects-grid'>
                    {projects.map((project, index) => (
                        <div 
                            className='project-card' 
                            key={project.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className='project-image'>
                                <img src={project.image}/>
                            </div>
                            <div className='project-info'>
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                <div className='project-tech'>
                                    {project.tech.map((tech, index) => (
                                        <span key={index} className='tech-tag'>{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className='project-links'>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className='project-btn'>
                                    <img src={logo} alt="logo" className="source-logo" />
                                    Source
                                </a>                               
                            </div>
                        </div>
                    ))}
                </div>
                <div className="get-in-touch" data-aos="fade-up">
                    <h2 id='contact'>Get in Touch</h2>
                    <p className="contact-text">
                        Want to chat? Just shoot me a DM <a href="https://instagram.com/srwsptw" target="_blank" rel="noopener noreferrer">with a direct question on Instagram</a> or <a href="mailto:sirawit.sptw@gmail.com">drop me an email</a>, and I'll reply as soon as I can.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Projects;