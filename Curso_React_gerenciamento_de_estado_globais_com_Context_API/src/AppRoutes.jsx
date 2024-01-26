import Feira from "./pages/Feira";
import Login from "./pages/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/feira" element={<Feira />} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;
