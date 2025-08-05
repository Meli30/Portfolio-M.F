import Habilidades from './components/Habilidades';
import Home from './components/Home'
import SobreMi from './components/SobreMi'
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import ThemeToggle from './components/ThemeToggle';
import './App.css';
import './index.css';


function App() {

  return (


    <div className=''>
      <ThemeToggle /> {/* 👈 botón flotante para cambiar de tema */}
      <Home />
      <Proyectos />
      <SobreMi />
      <Habilidades />
      <Contacto />
   
    </div>





  )
}

export default App;
