import './App.css';
import Lanyard from './Lanyard';
import Particles from './Particles';

export default function App() {
  return (
    <div className="body">
      <Particles />
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </div>
  );
}
