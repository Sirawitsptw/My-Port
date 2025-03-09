import './App.css';
import { useRef } from 'react';
import Lanyard from './components/Lanyard';
import Homepage from './components/homepage';
import Nav from './components/nav';
//import About from './components/about';

export default function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="body">
      <Nav 
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />
      <Homepage />
      {/* <About ref={aboutRef} /> */}
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </div>
  );
}
