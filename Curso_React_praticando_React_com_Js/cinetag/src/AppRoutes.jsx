import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cabecalho } from "/src/components/Cabecalho/Cabecalho";
import { Container } from "/src/components/Container/Container";
import { Inicio } from "./pages/Inicio/Inicio";
import { Favoritos } from "./pages/Favoritos/Favoritos";
import { Rodape } from "/src/components/Rodape/Rodape";


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Cabecalho />
            {/* <Container> */}
                <Routes>
                    <Route path="/" element={<Inicio />}></Route>
                    <Route path="/Favoritos" element={<Favoritos />}></Route>
                </Routes>
            {/* </Container> */}
            <Rodape />
        </BrowserRouter>
    );
};
