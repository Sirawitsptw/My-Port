import './App.css';
import Lanyard from './Lanyard';
import Homepage from './้homepage';

export default function App() {
  return (
    <div className="body">
      <Homepage />
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </div>
  );
}
