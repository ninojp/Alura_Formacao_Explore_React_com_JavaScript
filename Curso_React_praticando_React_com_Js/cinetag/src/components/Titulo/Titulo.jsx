import styled from "styled-components";

const DivTexto = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 32px;
        font-weight: 500;
    }
`;
// As PROPRIEDADES(parametros) {children} podem ser ELEMENTOS(html)
export const Titulo = ({children}) => {
    return (
        <DivTexto>
            {children}
        </DivTexto>
    );
};
