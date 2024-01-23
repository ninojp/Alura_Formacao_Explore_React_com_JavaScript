import styled from "styled-components";

const RodapeStyled = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80px;
    background-color: var(--preto);
    border: 1px dotted var(--cinza);
        h2{
            color: var(--cinza);
            font-size: 18px;
            font-weight: 400;
        }
`;

export const Rodape = () => {
    return (
        <RodapeStyled>
            <h2>
                Desenvolvido por Nino JP
            </h2>
        </RodapeStyled>
    );
}
