import React, { useEffect } from 'react';
import Lanyard from './components/Lanyard';
import Homepage from './components/homepage';
import Nav from './components/nav';
import About from './components/about';
import Projects from './components/project';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: true,
    });
  }, []);

  return (
    <div className="App" style={{backgroundColor: 'black'}}>
      <Nav />
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      <Homepage />
      <About />
      <Projects />
    </div>
  );
}
