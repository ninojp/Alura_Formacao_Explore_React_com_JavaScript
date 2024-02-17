import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import AdminRestaurantes from './paginas/Administracao/Restaurantes/AdminRestaurantes';
import FormRestaurantes from './paginas/Administracao/Restaurantes/FormRestaurantes';
import PaginaBaseAdmin from './paginas/Administracao/PaginaBaseAdmin';
import AdminPratos from './paginas/Administracao/Pratos/AdminPratos';
import FormPrato from './paginas/Administracao/Pratos/FormPrato';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path='/admin' element={<PaginaBaseAdmin />}>
        <Route path="restaurantes" element={<AdminRestaurantes />} />
        <Route path="restaurantes/novo" element={<FormRestaurantes />} />
        <Route path="restaurantes/:id" element={<FormRestaurantes />} />
        <Route path="pratos" element={<AdminPratos />} />
        <Route path="pratos/novo" element={<FormPrato />} />
        <Route path="pratos/:id" element={<FormPrato />} />
      </Route>
    </Routes>
  );
}
export default App;
