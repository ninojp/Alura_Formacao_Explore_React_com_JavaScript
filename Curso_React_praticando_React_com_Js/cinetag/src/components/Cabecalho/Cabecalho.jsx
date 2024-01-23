import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./logo.png";
import { CabecalhoLink } from "/src/components/CabecalhoLink/CabecalhoLink";

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.1em 20em;
    background-color: var(--preto);
`;

export const Cabecalho = () => {
    return (
        <HeaderStyled>
            <Link to={"./"}>
                {/* <img src="src/components/Cabecalho/logo.png" alt="Imagen do Logo" /> */}
                <img src={logo} alt="Imagen do Logo" />
            </Link>
            <nav>
                {/* <CabecalhoLink url={"./"}> */}
                <CabecalhoLink url={"./"}>
                    Home
                </CabecalhoLink>
                <CabecalhoLink url={"./Favoritos"}>
                    Favoritos
                </CabecalhoLink>
            </nav>
        </HeaderStyled>
    );
};
