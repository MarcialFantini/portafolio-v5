import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Portada from './components/Portada';
import WorkTodoo from './components/WorkTodoo';
import XState from './components/XState';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Portada />
      <WorkTodoo />
      <XState />
    </div>
  );
}

export default App;
