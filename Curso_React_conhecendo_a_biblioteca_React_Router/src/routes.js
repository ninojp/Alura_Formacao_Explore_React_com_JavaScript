import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from 'pages/Inicio/Inicio';
import Cardapio from 'pages/Cardapio';
import Menu from 'componets/Menu/Menu';
import PaginaPadrao from 'componets/PaginaPadrao/PaginaPadrao';
import ListaPratos from 'pages/ListaPratos/ListaPratos';
import Sobre from 'pages/Sobre/Sobre';
import Footer from 'componets/Footer/Footer';
import NotFound from 'pages/NotFound/NotFound';
import Prato from 'pages/Prato/Prato';

export default function appRoutes() {
    return (
        <main className='container'>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/' element={<PaginaPadrao />}>
                        <Route index element={<Inicio />} />
                        <Route path='cardapio' element={<Cardapio />} />
                        <Route path='listaPratos' element={<ListaPratos />} />
                        <Route path='sobre' element={<Sobre />} />
                        <Route path='prato/:id' element={<Prato />} />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </main>
    );
}
