import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                <div className='col-2'>
                    <div className='education-timeline' id = 'about'>
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
                    
                    <div className='skills-container'>
                        <h3>My Skills</h3>
                        <div className='skills'>
                            <div className='skill'>HTML</div>
                            <div className='skill'>CSS</div>
                            <div className='skill'>JavaScript</div>
                            <div className='skill'>React</div>
                            <div className='skill'>PHP</div>
                            <div className='skill'>Tailwind</div>
                            <div className='skill'>Bootstrap</div>
                            <div className='skill'>Java</div>
                            <div className='skill'>C</div>
                            <div className='skill'>Dart</div>
                            <div className='skill'>Firebase</div>
                            <div className='skill'>Git</div>
                        </div>
                    </div>
                    <button className='button'>Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default About;