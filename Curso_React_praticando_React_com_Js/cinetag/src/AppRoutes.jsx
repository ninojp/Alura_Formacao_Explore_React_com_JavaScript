import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cabecalho } from "/src/components/Cabecalho/Cabecalho";
import { Container } from "/src/components/Container/Container";
import { Inicio } from "./pages/Inicio/Inicio";
import { Favoritos } from "./pages/Favoritos/Favoritos";
import { Rodape } from "/src/components/Rodape/Rodape";
import { FavoritosProvider } from "/src/contexto/FavoritosProvider";


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Cabecalho />
            {/* <Container> */}
            <FavoritosProvider>
                <Routes>
                    <Route path="/" element={<Inicio />}></Route>
                    <Route path="/Favoritos" element={<Favoritos />}></Route>
                </Routes>
            </FavoritosProvider>
            {/* </Container> */}
            <Rodape />
        </BrowserRouter>
    );
};
