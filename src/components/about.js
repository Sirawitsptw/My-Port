import React, { forwardRef } from "react";
import './about.css';

const About = forwardRef((props, ref) => {
    return (
        <section className="about" ref={ref}>
            <div className="about-content">
                <div className="about-text">
                    <p>Hello</p>
                </div>
            </div>
        </section>
    );
});

export default About;