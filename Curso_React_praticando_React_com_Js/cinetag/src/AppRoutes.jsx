import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PaginaBase } from "./pages/PaginaBase/PaginaBase";
import { Inicio } from "./pages/Inicio/Inicio";
import { Favoritos } from "./pages/Favoritos/Favoritos";
import { Player } from "./pages/Player/Player";
import { NaoEcontrada } from "./pages/NaoEcontrada/NaoEcontrada";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="Favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NaoEcontrada />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
