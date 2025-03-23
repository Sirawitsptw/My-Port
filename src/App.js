import React from 'react';
import Lanyard from './components/Lanyard';
import Homepage from './components/homepage';
import Nav from './components/nav';
import About from './components/about';
import Projects from './components/project';

export default function App() {
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
