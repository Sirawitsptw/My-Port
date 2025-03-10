import React, { forwardRef } from 'react';
import './project.css';

const Projects = forwardRef((props, ref) => {
    return (
        <section className="projects" ref={ref}>
            <h2>ผลงานของฉัน</h2>
            <div className="project-grid">
            </div>
        </section>
    );
});

export default Projects;
