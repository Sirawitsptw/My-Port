import './App.css';
import Lanyard from './Lanyard';

export default function App() {
  return (
    <div className="body">
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </div>
  );
}
