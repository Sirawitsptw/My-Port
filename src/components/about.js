import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className='about' id = 'about'>
            <div className='container'>
                <div className='col-2'>
                    <h2>About Me</h2> 
                    <div className='education-timeline'>
                        <h3>Education</h3>
                        <div className='timeline'>
                            <div className='timeline-item'>
                                <div className='timeline-dot'></div>
                                <div className='timeline-date'>2023 - 2025</div>
                                <div className='timeline-content'>
                                    <h4>Bachelor of Industrial Technology (B.Ind.Tech.)</h4>
                                    <p>King Mongkut's University of Technology North Bangkok</p>
                                    <p>GPAX : 3.31</p>
                                </div>
                            </div>
                            <div className='timeline-item'>
                                <div className='timeline-dot'></div>
                                <div className='timeline-date'>2021 - 2023</div>
                                <div className='timeline-content'>
                                    <h4>Higher Vocational Certificate in Technology Computer</h4>
                                    <p>Chanthaburi Technical College</p>
                                    <p>GPAX : 3.49</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <p>Hello! My name is Sirawit Sriprathumwong (Palm) </p>
                    <p></p>
                    
                    <div className='skills-container'>
                        <h3>My Skills</h3>
                        <div className='skills'>
                            <div className='skill'>JavaScript</div>
                            <div className='skill'>HTML/CSS</div>
                            <div className='skill'>Java</div>
                            <div className='skill'>C/C++</div>
                            <div className='skill'>PHP</div>
                            <div className='skill'>Dart</div>
                        </div>
                    </div>
                    <button className='button'>Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default About;