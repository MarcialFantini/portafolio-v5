import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Portada from './components/Portada';
import WorkTodoo from './components/WorkTodoo';
import XState from './components/XState';
import { ClimaProyect } from './components/ClimaProyect';
import Footer from './components/Footer';
import SliceSkills from './components/SliceSkills';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Portada />
      <SliceSkills></SliceSkills>
      <WorkTodoo />
      <XState />
      <ClimaProyect />
      <Footer />
    </div>
  );
}

export default App;
