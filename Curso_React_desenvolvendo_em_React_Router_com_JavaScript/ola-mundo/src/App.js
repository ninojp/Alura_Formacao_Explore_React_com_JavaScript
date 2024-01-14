import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Inicio from "./Paginas/Inicio/Inicio.js";
import SobreMin from "./Paginas/SobreMin/SobreMin.js";

// console.log(window.location)
// const pagina = window.location.pathname === '/'? <Inicio /> : <SobreMin />

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/sobremin' element={<SobreMin />} />
        <Route path='*' element={<div>Página não encontrada!</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
