import { Cabecalho } from "/src/components/Cabecalho/Cabecalho";
import { Rodape } from "/src/components/Rodape/Rodape";
import { FavoritosProvider } from "/src/contexto/FavoritosProvider";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainStyles = styled.main`
    margin: 0;
    text-align: center;
`;

export const PaginaBase = () => {
    return (
        <MainStyles>
            <Cabecalho />
            <FavoritosProvider>
                <Outlet />
            </FavoritosProvider>
            <Rodape />
        </MainStyles>
    );
};
