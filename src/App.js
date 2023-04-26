import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Componentes/Home'
import Calcados from './Componentes/calcado'
import Camisetas from './Componentes/Camisetas'
import Nav from './Componentes/Nav'
import Footer from './Componentes/Footer'
import Equipamento from './Componentes/equipamento'

function App() {
  return (
    <BrowserRouter>
      <Nav /> 
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/calcado" element={<Calcados/>}/>
        <Route path="/camisetas" element={<Camisetas/>}/>
        <Route path="/equipamento" element={<Equipamento/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
