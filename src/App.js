
import './App.css';
import { Provider } from 'react-redux';

import { store } from './storeRedux/store'
import Visor from './components/Visor';
import Navbar from './components/Navbar';
import BodyMain from './components/BodyMain';
import Portada from './components/Portada';


function App() {

  return (
    <Provider store={store}>
      <BodyMain>
        <Navbar></Navbar>
        <Portada></Portada>
      </BodyMain>
    </Provider>
  );
}

export default App;
