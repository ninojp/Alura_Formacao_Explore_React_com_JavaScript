import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Inicio from "./Paginas/Inicio/Inicio.js";
import SobreMin from "./Paginas/SobreMin/SobreMin.js";
import Menu from './componentes/Menu/Menu.js';
import Rodape from 'componentes/Rodape/Rodape.js';
import PaginaPadrao from 'componentes/PaginaPadrao/PaginaPadrao.js';

// console.log(window.location)
// const pagina = window.location.pathname === '/'? <Inicio /> : <SobreMin />

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<PaginaPadrao />} >
          <Route index element={<Inicio />} />
          <Route path='/sobremin' element={<SobreMin />} />
        </Route>
        <Route path='*' element={<div>Página não encontrada!</div>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
