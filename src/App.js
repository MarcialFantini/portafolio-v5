import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Portada from './components/Portada';
import WorkTodoo from './components/WorkTodoo';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Portada />
      <WorkTodoo />
    </div>
  );
}

export default App;
