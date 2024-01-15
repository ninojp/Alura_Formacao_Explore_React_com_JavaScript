import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Inicio from "./Paginas/Inicio/Inicio.js";
import SobreMin from "./Paginas/SobreMin/SobreMin.js";
import Menu from './componentes/Menu/Menu.js';
import Rodape from 'componentes/Rodape/Rodape.js';
import PaginaPadrao from 'componentes/PaginaPadrao/PaginaPadrao.js';
import Post from 'Paginas/Post/Post.js';
import PgNãoEncontrada from 'Paginas/PgNãoEncontrada/PgNãoEncontrada.js';
import ScrollToTop from 'componentes/ScrollToTop/ScrollToTop.js';

// console.log(window.location)
// const pagina = window.location.pathname === '/'? <Inicio /> : <SobreMin />

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path='/' element={<PaginaPadrao />} >
          <Route index element={<Inicio />} />
          <Route path='/sobremin' element={<SobreMin />} />
        </Route>
        <Route path="posts/:id/*" element={<Post />} />
        <Route path='*' element={<PgNãoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
