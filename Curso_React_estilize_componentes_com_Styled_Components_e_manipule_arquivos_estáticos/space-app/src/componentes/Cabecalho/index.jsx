import {styled} from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
    display: flex;
    padding: 60px 0;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`;

const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <img src="/imagens/logo.png" alt="Imagem do Logo" />
            <CampoTexto />
        </HeaderEstilizado>
    );
};
export default Cabecalho;
