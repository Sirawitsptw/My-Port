import './App.css';
import Lanyard from './Lanyard';

function App() {
  return (
    <>
    <div className="body">
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </div>
    </>
  );
}

export default App;
