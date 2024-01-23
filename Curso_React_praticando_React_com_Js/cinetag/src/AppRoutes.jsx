import { Inicio } from "./pages/Inicio/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />}>

                </Route>
            </Routes>
        </BrowserRouter>
    );
};
