import React from 'react';
import Lanyard from './components/Lanyard';
import Homepage from './components/homepage';
import Nav from './components/nav';
import About from './components/about';
import Projects from './components/project';
import { Element } from 'react-scroll';

export default function App() {
  return (
    <div className="App" style={{backgroundColor: 'black'}}>
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      <Nav />
      <Element name="home">
        <Homepage />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
    </div>
  );
}
