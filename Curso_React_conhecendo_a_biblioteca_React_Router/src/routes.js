import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from 'pages/Inicio/Inicio';
import Cardapio from 'pages/Cardapio';
import Menu from 'componets/Menu/Menu';
import PaginaPadrao from 'componets/PaginaPadrao/PaginaPadrao';
import ListaPratos from 'pages/ListaPratos/ListaPratos';

export default function appRoutes() {
    return (
        <main>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/' element={<PaginaPadrao />}>
                        <Route index element={<Inicio />} />
                        <Route path='cardapio' element={<Cardapio />} />
                        <Route path='listaPratos' element={<ListaPratos />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </main>
    );
}
