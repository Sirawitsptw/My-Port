import React, { useEffect } from 'react';
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <div className='about'>
            <div className='container'>
                <div className='col-2'>
                    <div className='education-timeline' id='about' data-aos="fade-right" data-aos-duration="1000">
                        <h3 data-aos="fade-down" data-aos-delay="200">Education</h3>
                        <div className='timeline'>
                            <div className='timeline-item' data-aos="fade-up" data-aos-delay="300">
                                <div className='timeline-dot'></div>
                                <div className='timeline-date'>2023 - 2025</div>
                                <div className='timeline-content'>
                                    <h4>Bachelor of Industrial Technology (B.Ind.Tech.)</h4>
                                    <p>King Mongkut's University of Technology North Bangkok</p>
                                    <p>Electronic Computer Technology</p>
                                    <p>GPAX : 3.31</p>
                                </div>
                            </div>
                            <div className='timeline-item' data-aos="fade-up" data-aos-delay="500">
                                <div className='timeline-dot'></div>
                                <div className='timeline-date'>2021 - 2023</div>
                                <div className='timeline-content'>
                                    <h4>Higher Vocational Certificate in Technology Computer</h4>
                                    <p>Chanthaburi Technical College</p>
                                    <p>Computer Technology</p>
                                    <p>GPAX : 3.49</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='skills-container' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                        <h3 data-aos="fade-down" data-aos-delay="400">My Skills</h3>
                        <div className='skills'>
                            <div className='skill' data-aos="zoom-in" data-aos-delay="500">HTML</div>
                            <div className='skill' data-aos="zoom-in" data-aos-delay="550">CSS</div>
                            <div className='skill' data-aos="zoom-in" data-aos-delay="600">JavaScript</div>
                            <div className='skill' data-aos="zoom-in" data-aos-delay="650">React</div>
                            <div className='skill' data-aos="zoom-in" data-aos-delay="700">PHP</div>
                            <div className='skill' data-aos="zoom-in" data-aos-delay="750">Tailwind</div>
                            <div className='skill' data-aos="zoom-in" data-aos-delay="800">Bootstrap</div>
                            <div className='skill' data-aos="zoom-in" data-aos-delay="850">Java</div>
                            <div className='skill' data-aos="zoom-in" data-aos-delay="900">C</div>
                            <div className='skill' data-aos="zoom-in" data-aos-delay="950">Dart</div>
                            <div className='skill' data-aos="zoom-in" data-aos-delay="1000">Firebase</div>
                            <div className='skill' data-aos="zoom-in" data-aos-delay="1050">Git</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;